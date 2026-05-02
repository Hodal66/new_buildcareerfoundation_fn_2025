import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import CarouselInterval from "../components/flowbite_components/CarouselInterval";
import SkeletonActivityDetail from "../components/Skeletons/SkeletonActivityDetail";
import { GET_ONE_POST } from "../hooks/graphql/queries/ActivitieQueries";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaChevronLeft, FaTag, FaYoutube } from "react-icons/fa";

const ActivityDetailsPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_ONE_POST, {
    variables: { getOnePostId: postId },
  });

  let youtubeVideoId;
  if (!loading && data?.getOnePost?.youtube_video_url) {
    try {
      const url = new URL(data.getOnePost.youtube_video_url);
      youtubeVideoId = url.searchParams.get("v") || url.pathname.split("/").pop();
    } catch (err) {
      console.error("Invalid YouTube URL:", err);
    }
  }

  if (loading) {
    return (
      <div className="bg-bgGray min-h-screen">
        <HeaderComponent />
        <div className="flex justify-center py-20 px-4">
          <SkeletonActivityDetail />
        </div>
        <FooterComponent />
      </div>
    );
  }

  if (error || !data?.getOnePost) {
    return (
      <div className="bg-bgGray min-h-screen flex flex-col">
        <HeaderComponent />
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
          <h2 className="text-2xl font-black text-grad1 mb-4">Post Not Found</h2>
          <p className="text-slate-500 mb-8">The activity you are looking for might have been moved or deleted.</p>
          <button 
            onClick={() => navigate("/ActivitiesPage")}
            className="bg-grad1 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
          >
            Back to Activities
          </button>
        </div>
        <FooterComponent />
      </div>
    );
  }

  const post = data.getOnePost;
  const isCourse = post.category === "Courses";

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-Nunito selection:bg-grad1/10 selection:text-grad1">
      <HeaderComponent />

      {/* Hero Header */}
      <div className="bg-grad1 pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-grad3 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-grad2 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <button 
            onClick={() => navigate("/ActivitiesPage")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-bold text-sm"
          >
            <FaChevronLeft size={12} /> Back to Activities
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="bg-grad3 text-white px-4 py-1.5 rounded-full text-[12px] font-black tracking-widest uppercase shadow-lg shadow-grad3/20 flex items-center gap-2">
              <FaTag size={10} /> {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/60 font-bold text-sm mt-4">
              <span className="flex items-center gap-2"><FaCalendarAlt size={14} className="text-grad3" /> {new Date(Number(post.date_posted) || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              {isCourse && <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-white"><FaYoutube size={14} className="text-red-500" /> Premium Course Content</span>}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 -mt-20 pb-20 relative z-20">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Primary Visual Element (YouTube for Courses, Image for others) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-white"
          >
            {isCourse && youtubeVideoId ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : post.image_url?.[0]?.url ? (
              <img 
                src={post.image_url[0].url} 
                alt={post.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            ) : (
              <div className="aspect-video flex items-center justify-center bg-slate-100 text-slate-400 font-bold">
                No featured visual available
              </div>
            )}
          </motion.div>

          {/* Text Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-12">
              <section className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100">
                <p className="text-xl md:text-2xl font-black text-slate-800 leading-snug mb-8 first-letter:text-5xl first-letter:font-black first-letter:text-grad1 first-letter:mr-3 first-letter:float-left">
                  {post.content}
                </p>

                <div className="space-y-10 mt-10">
                  {post.contentSections?.map((section, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <h3 className="text-2xl font-black text-grad1 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-grad1/10 flex items-center justify-center text-xs text-grad1">{idx + 1}</span>
                        {section.sectionTitle}
                      </h3>
                      <div className="space-y-4 text-slate-600 font-medium leading-relaxed md:text-lg">
                        <p>{section.paragraph1}</p>
                        {section.paragraph2 && <p>{section.paragraph2}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Gallery Section */}
              {post.image_urls?.length > 0 && (
                <section className="bg-white p-2 rounded-[44px] shadow-lg border border-slate-100 overflow-hidden">
                  <div className="p-8 pb-4 flex justify-between items-center">
                    <h2 className="text-2xl font-black text-slate-800">Visual Gallery</h2>
                    <span className="text-sm font-bold text-slate-400">{post.image_urls.length} Images</span>
                  </div>
                  <div className="h-[400px] md:h-[500px] mb-4">
                    <CarouselInterval image_array={post.image_urls} />
                  </div>
                </section>
              )}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-grad1 p-8 rounded-[40px] text-white shadow-xl shadow-grad1/20 overflow-hidden relative group">
                <div className="relative z-10">
                   <h4 className="text-xl font-black mb-2">Help Us Build<br />More Careers</h4>
                   <p className="text-white/60 text-sm font-bold mb-6 italic">“Education is the most powerful weapon which you can use to change the world.”</p>
                   <button 
                    onClick={() => navigate("/HowDoesGivingWorkPage")}
                    className="w-full bg-white text-grad1 py-4 rounded-2xl font-black text-sm hover:scale-[1.03] transition-transform shadow-lg shadow-black/20"
                   >
                     Support Our Mission
                   </button>
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-grad3/30 rounded-full blur-2xl -ml-12 -mb-12"></div>
              </div>

              {/* Course Features - Conditional */}
              {isCourse && (
                <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-black text-slate-800 mb-4 border-b border-slate-50 pb-2">Course Highlights</h4>
                  <ul className="space-y-4">
                    {['Interactive Video', 'Industry Insights', 'Certificate of Progress', 'Life Skills Integrated'].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-grad3"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default ActivityDetailsPage;
