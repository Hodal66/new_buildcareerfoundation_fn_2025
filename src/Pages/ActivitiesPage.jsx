/* eslint-disable react-refresh/only-export-components */
"use client";

// import { Link } from "react-router-dom";
import CardOfActivities from "../components/Card-Of-Activities/CardOfActivities";
import { HeaderComponent } from "../components/HeaderComponent";
import { usePosts } from "../hooks/usePosts";
import { FooterComponent } from "../components/FooterComponent";
import LoadingMessage from "../Pages/DashboardPageStuff/LoadingMessage";
import styles from "../styles";
import MainHeading1 from "../components/Headings/MainHeading1";
import { useState } from "react";

export const ActivitiesPage = () => {
  const { data, loading } = usePosts();
  const [filter, setfilter] = useState("All");
  const [IsCategorySelected, setIsCategorySelected] = useState({
    All: true,
    Celebrations: false,
    Events: false,
    Meetings: false,
    Stories: false,
  });

  const filteredData = data?.getAllPosts.filter((post) => {
    if (filter === "All") {
      return true;
    } else {
      return post.category === filter;
    }
  });
  console.log(data?.getAllPosts);

  return (
    <div className="bg-bgGray">
      {/* Header starts here my brother */}
      <HeaderComponent />
      {/* Header ends here my brother ! */}
      <div
        className={` ${styles.paddingX} bg-bgGray h-fit   items-center text-black font-montiseramwa pb-8`}
      >
        <div className=" h-fit py-4 text-center">
          <MainHeading1 Title={"Activities"} />

          <div className={`${styles.flexCenterCol} py-4`}>
            <div
              className={`${styles.blueGradient} flex md:w-1/2 w-full justify-evenly py-4 text-white rounded-md md:rounded-roundedBox`}
            >
              <div>
                <button
                  onClick={() => {
                    setfilter("All");
                    setIsCategorySelected(() => {
                      return {
                        All: true,
                        Celebrations: false,
                        Events: false,
                        Meetings: false,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  // className="hover:text-thankYouColor hover:font-semibold"
                  className={`hover:text-thankYouColor hover:font-semibold ${
                    IsCategorySelected.All
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  All
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setfilter("Celebrations");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Celebrations: true,
                        Events: false,
                        Meetings: false,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  className={`hover:text-thankYouColor hover:font-semibold ${
                    IsCategorySelected.Celebrations
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Celebrations
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setfilter("Events");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Celebrations: false,
                        Events: true,
                        Meetings: false,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  // className="hover:text-thankYouColor hover:font-semibold"
                  className={`hover:text-thankYouColor hover:font-semibold ${
                    IsCategorySelected.Events
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Events
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setfilter("Meetings");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Celebrations: false,
                        Events: false,
                        Meetings: true,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  // className="hover:text-thankYouColor hover:font-semibold"
                  className={`hover:text-thankYouColor hover:font-semibold ${
                    IsCategorySelected.Meetings
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Meetings
                </button>
              </div>
              <div>
                {/* <Link to="/ActivityDetailsPage"> */}
                <button
                  onClick={() => {
                    setfilter("Stories");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Celebrations: false,
                        Events: false,
                        Meetings: false,
                        Stories: true,
                      };
                    });
                  }}
                  type="button"
                  // className="hover:text-thankYouColor hover:font-semibold"
                  className={`hover:text-thankYouColor hover:font-semibold ${
                    IsCategorySelected.Stories
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Stories
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-4 md:gap-8 lg:gap-4 items-center">
          {/* db.reviews.filter((review) => review.productId === id); */}
          {loading ? (
            <LoadingMessage />
          ) : (
            filteredData?.map((post, index) => {
              // data.getAllPosts.map((post, index) => {
              return <CardOfActivities key={index} data={post} />;
            })
          )}
        </div>
      </div>
      {/* Content ends here my brother */}

      {/* Footer section starts here */}
      <FooterComponent />
      {/* Footer ends here my brother */}
    </div>
  );
};
