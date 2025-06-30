// import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_ACTIVITIES_POSTS } from "../../../hooks/graphql/queries/ActivitieQueries";
import { BiArrowToLeft } from "react-icons/bi";
import Heading1 from "../../../components/Headings/Heading1";

const ViewMoreActivitieInformation = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_ACTIVITIES_POSTS);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error)
    return <div className="p-6 text-red-500">Error: {error.message}</div>;

  const post = data.getAllPosts.find((p) => p._id === id);

  if (!post) return <div className="p-6 text-gray-500">Post not found.</div>;

  let youtubeLinkIndicator;
  if (!loading && post.youtube_video_url) {
    try {
      const url = new URL(post.youtube_video_url);
      // Try to extract the "v" query parameter or take the last segment of the path.
      youtubeLinkIndicator =
        url.searchParams.get("v") || url.pathname.split("/").pop();
    } catch (err) {
      console.error("Invalid YouTube URL:", err);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">All Posts</h1>
        <Link
          to={"overview"}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          <BiArrowToLeft className="w-5 h-5" />
          Back to Activities
        </Link>
      </div>
      <div>
        <div className="p-12">
          <Heading1 Title={"The Main Image"} />

          {post.image_url.map((img, index) => (
            <div key={index} className="rounded-md overflow-hidden shadow">
              <img
                src={img.url}
                alt={img.filename}
                className="w-full h-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-1">
                {img.filename}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Title + Category */}
        <div className="bg-white shadow rounded-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span className="capitalize">Category: {post.category}</span>
            <span>{new Date(post.date_posted).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Main Content
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Content Sections */}
        {post.contentSections.length > 0 && (
          <div className="bg-white shadow rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Content Sections
            </h2>
            {post.contentSections.map((section, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 bg-gray-50"
              >
                <h3 className="text-lg font-bold text-gray-700">
                  {section.sectionTitle}
                </h3>
                <p className="text-gray-600 mt-2">{section.paragraph1}</p>
                <p className="text-gray-600 mt-1">{section.paragraph2}</p>
              </div>
            ))}
          </div>
        )}

        {/* YouTube Video */}
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

        {/* Images */}
        {post.image_urls.length > 0 && (
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {post.image_urls.map((img, index) => (
                <div key={index} className="rounded-md overflow-hidden shadow">
                  <img
                    src={img.url}
                    alt={img.filename}
                    className="w-full h-48 object-cover"
                  />
                  <p className="text-center text-sm text-gray-500 mt-1">
                    {img.filename}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMoreActivitieInformation;
