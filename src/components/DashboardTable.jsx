/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { FaSearch, FaChevronLeft, FaChevronRight, FaFilter, FaSortAmountUp, FaSortAmountDown, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardTable = ({ 
  data = [], 
  columns = [], 
  title = "Data Overview", 
  searchPlaceholder = "Search records...", 
  onRowClick,
  pageSizeOptions = [5, 10, 20, 50],
  initialPageSize = 10,
  isLoading = false
}) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnVisibility, setColumnVisibility] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current && 
        !filterRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };
    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFilterOpen]);

  // For Portal positioning
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  useEffect(() => {
    if (isFilterOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.right - 256 + window.scrollX, // 256 is w-64
      });
    }
  }, [isFilterOpen]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
  });

  return (
    <div className="bg-white dark:bg-slate-800 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-700 overflow-visible flex flex-col font-Nunito transition-all relative">
      {/* Table Header / Controls */}
      <div className="p-8 border-b border-gray-50 dark:border-slate-700 flex flex-col lg:flex-row justify-between items-center gap-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="flex flex-col gap-1 w-full lg:w-auto">
          <h3 className="text-2xl font-black text-gray-800 dark:text-white tracking-tight">{title}</h3>
          <p className="text-[13px] font-semibold text-slate-500/70 dark:text-slate-400">
            {table.getFilteredRowModel().rows.length} Total Records
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto relative">
          <div className="relative flex-1 lg:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input
              type="text"
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 bg-bgGray dark:bg-slate-700/50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-grad1 transition-all placeholder:text-slate-400 text-gray-700 dark:text-slate-200"
            />
          </div>
          
          <div className="relative">
            <button 
              ref={buttonRef}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-3.5 rounded-2xl transition-all border shadow-sm flex items-center gap-2 ${
                isFilterOpen 
                ? 'bg-grad1 text-white border-grad1 shadow-grad1/20' 
                : 'bg-gray-50 dark:bg-slate-700 text-slate-400 border-gray-100 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
            >
              <FaFilter size={14} />
              <span className="text-[12px] font-bold hidden sm:inline">Columns</span>
            </button>

            {/* Portal-based Column Visibility Dropdown */}
            {isFilterOpen && createPortal(
              <div 
                style={{ 
                  position: 'absolute', 
                  top: coords.top, 
                  left: coords.left,
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <motion.div
                  ref={filterRef}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="w-64 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden p-4"
                >
                  <div className="flex items-center justify-between mb-4 px-2">
                     <h4 className="text-[13px] font-black text-gray-800 dark:text-white">Display Settings</h4>
                     <div className="flex gap-3">
                       <button 
                          onClick={() => table.toggleAllColumnsVisible(true)}
                          className="text-[11px] font-bold text-grad1 hover:opacity-70 transition-opacity"
                        >
                          All
                       </button>
                       <button 
                          onClick={() => {
                            table.getAllLeafColumns().forEach(col => {
                              if (col.id !== 'actions' && col.id !== 'select') {
                                col.toggleVisibility(false);
                              }
                            });
                          }}
                          className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          None
                       </button>
                     </div>
                  </div>
                  <div className="space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                    {table.getAllLeafColumns().map((column) => {
                      if (column.id === 'actions' || column.id === 'select') return null;
                      
                      let label = typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
                      if (!label || label === column.id) {
                         label = column.id
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/_/g, ' ')
                          .replace(/^./, (str) => str.toUpperCase())
                          .trim();
                      }

                      const isVisible = column.getIsVisible();

                      return (
                        <div 
                          key={column.id}
                          onClick={() => column.toggleVisibility(!isVisible)}
                          className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.98] ${
                            isVisible 
                            ? 'bg-grad1/5 dark:bg-grad1/10 text-gray-800 dark:text-white' 
                            : 'text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                          }`}
                        >
                          <span className="text-[13px] font-bold">
                            {label}
                          </span>
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all ${
                            isVisible 
                            ? 'bg-grad1 text-white scale-110 shadow-lg shadow-grad1/20' 
                            : 'bg-gray-100 dark:bg-slate-700 text-transparent border border-gray-200 dark:border-slate-600'
                          }`}>
                            <FaCheck size={10} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-50 dark:border-slate-700">
                    <button 
                      onClick={() => {
                        table.setColumnVisibility({});
                        setIsFilterOpen(false);
                      }}
                      className="w-full py-2.5 text-[12px] font-black text-grad1 bg-grad1/5 hover:bg-grad1/10 rounded-xl transition-all"
                    >
                      Restore Defaults
                    </button>
                  </div>
                </motion.div>
              </div>,
              document.body
            )}
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto relative min-h-[400px]">
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
             <div className="w-10 h-10 border-4 border-grad1 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <table className="w-full text-left">
          <thead className="bg-[#F8FAFC]/50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-8 py-6 text-[13px] font-bold text-slate-500/80 dark:text-slate-400 text-left">
                    <div
                      {...{
                        className: header.column.getCanSort() ? 'cursor-pointer select-none flex items-center gap-2 group/header' : 'flex items-center gap-2',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        <span className="text-slate-300 group-hover/header:text-grad1 transition-colors">
                          {header.column.getIsSorted() === 'asc' ? <FaSortAmountUp size={12} /> : 
                           header.column.getIsSorted() === 'desc' ? <FaSortAmountDown size={12} /> : 
                           <div className="opacity-0 group-hover/header:opacity-100 transition-opacity"><FaSortAmountUp size={10} /></div>}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr 
                  key={row.id} 
                  className={`transition-all duration-200 ${onRowClick ? 'cursor-pointer hover:bg-[#F8FAFC] dark:hover:bg-slate-700/30' : ''}`}
                  onClick={() => onRowClick && onRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-8 py-5">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className="px-8 py-20 text-center">
                   <p className="text-slate-400 font-bold italic">No matching records found.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-8 bg-gray-50/30 dark:bg-slate-900/10 border-t border-gray-50 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-500">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-slate-500/70 dark:text-slate-400">Rows per page</span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="bg-white dark:bg-slate-700 border border-gray-100 dark:border-slate-600 rounded-xl text-xs font-black p-2 px-4 focus:ring-2 focus:ring-grad1 transition-all cursor-pointer shadow-sm"
            >
              {pageSizeOptions.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <span className="hidden sm:inline border-l border-slate-200 dark:border-slate-700 pl-6 text-[13px] font-semibold text-slate-500/70 dark:text-slate-400">
            Page <span className="text-gray-800 dark:text-white font-black">{table.getState().pagination.pageIndex + 1}</span> of <span className="text-gray-800 dark:text-white font-black">{table.getPageCount()}</span>
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-700 border border-gray-100 dark:border-slate-600 disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all shadow-sm active:scale-95 group font-bold text-[13px]"
          >
            <FaChevronLeft size={10} className="group-hover:-translate-x-1 transition-transform" />
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-700 border border-gray-100 dark:border-slate-600 disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all shadow-sm active:scale-95 group font-bold text-[13px]"
          >
            Next
            <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
