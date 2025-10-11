/**
 * ActivityDetailsPage Component
 * Fully responsive activity detail view with skeleton loading
 * Displays activity content, images, video, and gallery
 * Responsive breakpoints: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px)
 */

/* eslint-disable react/no-unknown-property */
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import CarouselInterval from "../components/flowbite_components/CarouselInterval";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading2 from "../components/Headings/Heading2";
import Heading1 from "../components/Headings/Heading1";
import SkeletonActivityDetail from "../components/Skeletons/SkeletonActivityDetail";
import { GET_ONE_POST } from "../hooks/graphql/queries/ActivitieQueries";

const ActivityDetailsPage = () => {
  const { postId } = useParams();
  const { data, loading, error } = useQuery(GET_ONE_POST, {
    variables: { getOnePostId: postId },
  });

  let youtubeLinkIndicator;
  if (!loading && data?.getOnePost?.youtube_video_url) {
    try {
      const url = new URL(data.getOnePost.youtube_video_url);
      // Try to extract the "v" query parameter or take the last segment of the path.
      youtubeLinkIndicator =
        url.searchParams.get("v") || url.pathname.split("/").pop();
    } catch (err) {
      console.error("Invalid YouTube URL:", err);
    }
  }

  // Show skeleton loader while data is loading
  if (loading) {
    return (
      <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col">
        <HeaderComponent />
        <SkeletonActivityDetail />
        <FooterComponent />
      </div>
    );
  }

  // Show error message if data fetch failed
  if (error) {
    return (
      <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col">
        <HeaderComponent />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-md">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-red-600">
              Error loading post details. Please try again later.
            </p>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col">
      <HeaderComponent />

      {/* Main Content - Responsive padding and spacing */}
      <main className="container md:mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col items-center">
        {/* Title Section - Responsive heading */}
        <section className="w-full max-w-5xl text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <MainHeading1
            classNameProps="pb-4 sm:pb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight"
            Title={data?.getOnePost?.title}
          />
        </section>

        {/* Main Content Card - Responsive padding and border radius */}
        <section className="w-full max-w-5xl bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-500 hover:shadow-2xl">
          {/* Featured Image - Responsive height */}
          <div className="flex flex-col items-center mb-4 sm:mb-6">
            {data?.getOnePost?.image_url?.[0]?.url ? (
              <img
                src={data.getOnePost.image_url[0].url}
                alt={data?.getOnePost?.title || "Event"}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:max-h-[500px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm"
              />
            ) : (
              <div className="w-full h-48 sm:h-64 bg-gray-200 flex items-center justify-center rounded-lg sm:rounded-xl">
                <p className="text-sm sm:text-base text-gray-500">No image available</p>
              </div>
            )}
          </div>

          {/* Text Content - Responsive typography */}
          <div className="text-gray-700 space-y-4 sm:space-y-6">
            {data?.getOnePost?.content && (
              <div className="text-sm sm:text-base md:text-lg">
                <Heading2 Title={data.getOnePost.content} />
              </div>
            )}

            {/* Content Sections - Responsive spacing */}
            {data?.getOnePost?.contentSections?.map((section, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b pb-2">
                  {section?.sectionTitle}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {section?.paragraph1}
                </p>
                {section?.paragraph2 && (
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {section?.paragraph2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Video Section - Responsive video embed */}
        {youtubeLinkIndicator && (
          <section className="w-full max-w-5xl bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <Heading1
              classNameProps="mb-4 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800"
              Title="Video of the Event"
            />
            <div
              className="relative w-full overflow-hidden rounded-lg sm:rounded-xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeLinkIndicator}`}
                title="Event Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl shadow-lg"
              ></iframe>
            </div>
          </section>
        )}

        {/* Photo Gallery Section - Responsive carousel */}
        <section className="w-full max-w-5xl bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-6 sm:mb-8">
          <Heading1
            classNameProps="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 py-4 sm:py-6"
            Title="Event Photos Gallery"
          />
          <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] pb-6 sm:pb-8 md:pb-12">
            <CarouselInterval image_array={data?.getOnePost?.image_urls} />
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
};

export default ActivityDetailsPage;