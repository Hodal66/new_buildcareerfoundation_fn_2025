import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../../hooks/graphql/queries/UserQueries';
import { GET_ALL_ACTIVITIES_POSTS } from '../../../hooks/graphql/queries/ActivitieQueries';
import { GET_ALL_SUBSCRIBERS } from '../../../hooks/graphql/queries/SubscribersQueries';
import AdvancedLoader from '../../../components/AdvancedLoader';
import AdminHero from './Overview/AdminHero';
import ImpactStats from './Overview/ImpactStats';
import GrowthAnalytics from './Overview/GrowthAnalytics';
import RecentActivity from './Overview/RecentActivity';

function Overview() {
  const { data: userData, loading: userLoading } = useQuery(GET_ALL_USERS);
  const { data: activityData, loading: activityLoading } = useQuery(GET_ALL_ACTIVITIES_POSTS);
  const { data: subData, loading: subLoading } = useQuery(GET_ALL_SUBSCRIBERS);

  if (userLoading || activityLoading || subLoading) return <AdvancedLoader loading={true} />;
  
  const studentCount = userData?.get_all_users?.length || 0;
  const postCount = activityData?.getAllPosts?.length || 0;
  const subscriberCount = subData?.getAllSubscriptions?.length || 0;
  
  const recentActivities = activityData?.getAllPosts?.slice(0, 4) || [];

  return (
    <div className="p-6 lg:p-10 bg-[#F8FAFC] dark:bg-slate-900 min-h-screen font-Nunito scroll-smooth uppercase-selection">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AdminHero />

        {/* Top KPI Dash */}
        <ImpactStats 
          stats={{ 
            totalStudents: studentCount,
            activeMentors: postCount, // Using activities as a metric for now
            successStories: subscriberCount,
            fundingDisbursed: '$12.5k'
          }} 
        />

        {/* Analytics Section */}
        <GrowthAnalytics />

        {/* Alerts & Quick Actions */}
        <RecentActivity data={recentActivities} />
        
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
