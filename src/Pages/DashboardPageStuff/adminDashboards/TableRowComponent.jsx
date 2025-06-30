/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sliceTheStringTofit } from "../Common/sliceTheString";

const TableRowComponent = (props) => {
  const { slicedTitle, slicedContent } = sliceTheStringTofit(
    props.busName,
    props.busPlate,
    30,
    30
  );
  const handleDelete = () => {
    props.onDelete(props);
  };
  const handleUpdate = () => {
    props.onSaveData(props);
    props.setOpenModalRow(true);
  };
  return (
    <tr className="hover:bg-gray-50 text-sm text-gray-800 transition-all duration-150 border-b border-gray-200">
      <td className="px-4 py-3 font-medium">{props.number}</td>
      <td className="px-4 py-3">{slicedTitle}</td>
      <td className="px-4 py-3 truncate">{slicedContent}</td>
      <td className="px-4 py-3">{props.busRoute}</td>
      <td className="px-4 py-3">{props.post.image_url.length}</td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleUpdate}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <Link to="">
              <FiEdit
                className="w-5 h-5"
                data-testid={`row-edit-${props.number}`}
              />
            </Link>
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 transition"
          >
            <RiDeleteBin6Line
              className="w-5 h-5"
              data-testid={`row-delete-${props.number}`}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TableRowComponent;
