/* eslint-disable react/prop-types */
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const UserOverviewWidgets = ({ stats }) => {
  // Mock data for BCF themes: Role Distribution, Status, and Barriers
  const roleData = {
    labels: ['Students', 'Mentors', 'Admins'],
    datasets: [
      {
        data: [stats.totalStudents || 100, stats.totalMentors || 40, stats.totalAdmins || 10],
        backgroundColor: ['#23297A', '#008080', '#0ABAB5'], // grad1, grad2, grad3
        borderWidth: 0,
      },
    ],
  };

  const barrierData = {
    labels: ['Financial', 'Academic', 'Geographic', 'Other'],
    datasets: [
      {
        label: 'Reported Barriers',
        data: [65, 45, 30, 15],
        backgroundColor: 'rgba(54, 159, 215, 0.6)', // darkBluePhant with opacity
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: 'Nunito', size: 10, weight: 'bold' },
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 font-Nunito">
      {/* Total Users Summary Card */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col justify-between">
        <div>
          <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 mb-1">Community Growth</h4>
          <h2 className="text-4xl font-black text-gray-800 dark:text-white">150</h2>
          <p className="text-xs font-bold text-emerald-500 mt-1">↑ 12% vs last month</p>
        </div>
        <div className="mt-6 flex gap-2">
            <span className="bg-grad1/10 text-grad1 text-[12px] font-bold px-3 py-1 rounded-full">100 Students</span>
            <span className="bg-grad2/10 text-grad2 text-[12px] font-bold px-3 py-1 rounded-full">40 Mentors</span>
        </div>
      </div>

      {/* Role Distribution Pie Chart */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 h-[280px]">
        <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 mb-4">Role distribution</h4>
        <div className="h-44">
          <Pie data={roleData} options={chartOptions} />
        </div>
      </div>

      {/* Barrier Insights Bar Chart */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 h-[280px] lg:col-span-1 md:col-span-2">
        <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 mb-4">Barrier insights (students)</h4>
        <div className="h-44">
          <Bar data={barrierData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default UserOverviewWidgets;
