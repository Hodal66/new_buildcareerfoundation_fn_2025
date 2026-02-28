import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../../hooks/graphql/queries/UserQueries';
import AdvancedLoader from '../../../components/AdvancedLoader';
import AdminHero from './Overview/AdminHero';
import ImpactStats from './Overview/ImpactStats';
import GrowthAnalytics from './Overview/GrowthAnalytics';
import RecentActivity from './Overview/RecentActivity';

function Overview() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (loading) return <AdvancedLoader loading={loading} />;
  
  const studentCount = data?.get_all_users?.length || 0;

  return (
    <div className="p-6 lg:p-10 bg-[#F8FAFC] dark:bg-slate-900 min-h-screen font-Nunito scroll-smooth">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AdminHero />

        {/* Top KPI Dash */}
        <ImpactStats 
          stats={{ 
            totalStudents: studentCount,
            activeMentors: 42, // Mock for now
            successStories: 28,
            fundingDisbursed: '$12.5k'
          }} 
        />

        {/* Analytics Section */}
        <GrowthAnalytics />

        {/* Alerts & Quick Actions */}
        <RecentActivity />
        
        {/* Footer info */}
        <div className="mt-16 pb-8 text-center">
            <p className="text-[12px] font-semibold text-slate-500/50 dark:text-slate-500">
                Build Career Foundation &copy; 2026 &bull; Impact v2.4.0
            </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
