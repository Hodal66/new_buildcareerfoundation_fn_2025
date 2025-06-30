/* eslint-disable react/no-unknown-property */
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import CarouselInterval from "../components/flowbite_components/CarouselInterval";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading2 from "../components/Headings/Heading2";
import Heading1 from "../components/Headings/Heading1";
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-lg text-gray-600 animate-pulse">
          Loading post details...
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-600">
        <p className="text-lg font-semibold">
          Error loading post details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col">
      <HeaderComponent />

      <main className="container md:mx-auto px-4 py-10 flex flex-col items-center">
        <section className="w-full max-w-5xl text-center mb-12">
          <MainHeading1
            classNameProps="pb-6 text-4xl lg:text-5xl font-extrabold text-gray-800"
            Title={data?.getOnePost?.title}
          />
        </section>

        <section className="w-full max-w-5xl bg-white shadow-xl rounded-3xl p-10 mb-12 transition-all duration-500 hover:shadow-2xl">
          <div className="flex flex-col items-center mb-6">
            {data?.getOnePost?.image_url?.[0]?.url ? (
              <img
                src={data.getOnePost.image_url[0].url}
                alt="Event"
                className="w-full max-h-[500px] object-cover rounded-2xl shadow-sm"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p>No image available</p>
              </div>
            )}
          </div>

          <div className="text-gray-700">
            {data?.getOnePost?.content && (
              <Heading2 Title={data.getOnePost.content} />
            )}
            {data?.getOnePost?.contentSections?.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                  {section?.sectionTitle}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {section?.paragraph1}
                </p>
                {section?.paragraph2 && (
                  <p className="text-base sm:text-lg text-gray-600">
                    {section?.paragraph2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {youtubeLinkIndicator && (
          <section className="w-full max-w-5xl bg-white shadow-xl rounded-3xl p-10 mb-12">
            <Heading1
              classNameProps="mb-6 text-center text-3xl font-bold text-gray-800"
              Title="Video of the Event"
            />
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeLinkIndicator}`}
                title="Event Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              ></iframe>
            </div>
          </section>
        )}

        <section className="w-full max-w-5xl h-[500px] pb-12 bg-white shadow-xl rounded-3xl">
          <Heading1
            classNameProps="text-center text-3xl font-bold text-gray-800 py-6"
            Title="Event Photos Gallery"
          />
          <CarouselInterval image_array={data?.getOnePost?.image_urls} />
        </section>
      </main>

      <FooterComponent />
    </div>
  );
};

export default ActivityDetailsPage;