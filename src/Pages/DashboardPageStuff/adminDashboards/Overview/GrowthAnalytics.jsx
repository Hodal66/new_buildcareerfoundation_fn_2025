/* eslint-disable react/prop-types */
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const GrowthAnalytics = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Students',
        data: [65, 78, 90, 115, 130, 150],
        borderColor: '#23297A', // grad1
        backgroundColor: 'rgba(35, 41, 122, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Mentors',
        data: [20, 25, 28, 35, 38, 42],
        borderColor: '#008080', // grad2
        backgroundColor: 'rgba(0, 128, 128, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const donutData = {
    labels: ['Financial', 'Academic', 'Geographic', 'Family Support'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ['#23297A', '#008080', '#0ABAB5', '#F59E0B'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { family: 'Nunito', size: 10, weight: 'bold' }, usePointStyle: true },
      },
    },
    scales: {
      y: { display: false },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 font-Nunito">
      {/* Growth Trend Chart */}
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-700 h-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400">Growth trend (6 months)</h4>
          <span className="text-grad1 font-black text-xs hover:underline cursor-pointer">View Full Details</span>
        </div>
        <div className="h-[280px]">
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>

      {/* Barriers Donut Chart */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-700 h-[400px]">
        <h4 className="text-[13px] font-semibold text-slate-500/80 dark:text-slate-400 mb-6 text-center">Student barriers breakdown</h4>
        <div className="h-[280px]">
          <Doughnut data={donutData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default GrowthAnalytics;
