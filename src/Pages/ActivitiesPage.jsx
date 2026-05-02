/**
 * ActivitiesPage Component
 * Fully responsive activities listing with filtering and skeleton loading
 * Responsive grid: 1 col (mobile), 2 cols (sm), 3 cols (md), 4 cols (lg+)
 */

/* eslint-disable react-refresh/only-export-components */
"use client";

import CardOfActivities from "../components/Card-Of-Activities/CardOfActivities";
import { HeaderComponent } from "../components/HeaderComponent";
import { usePosts } from "../hooks/usePosts";
import { FooterComponent } from "../components/FooterComponent";
import SkeletonGrid from "../components/Skeletons/SkeletonGrid";
import styles from "../styles";
import MainHeading1 from "../components/Headings/MainHeading1";
import { useState } from "react";

export const ActivitiesPage = () => {
  const { data, loading } = usePosts();
  const [filter, setfilter] = useState("All");
  const [IsCategorySelected, setIsCategorySelected] = useState({
    All: true,
    Courses: false,
    Events: false,
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
    <div className="bg-bgGray min-h-screen">
      {/* Header */}
      <HeaderComponent />

      {/* Main Content - Responsive padding and spacing */}
      <div
        className={`${styles.paddingX} bg-bgGray h-fit items-center text-black font-montiseramwa pb-8 sm:pb-12 md:pb-16`}
      >
        {/* Page Header Section */}
        <div className="h-fit py-4 sm:py-6 md:py-8 text-center">
          <MainHeading1 Title={"Activities"} />

          {/* Filter Buttons - Fully responsive */}
          <div className={`${styles.flexCenterCol} py-4 sm:py-6`}>
            <div
              className={`${styles.blueGradient} flex flex-wrap md:w-3/4 lg:w-2/3 xl:w-1/2 w-full justify-evenly py-3 sm:py-4 px-2 sm:px-4 text-white rounded-md md:rounded-xl lg:rounded-roundedBox gap-2 sm:gap-3 md:gap-4`}
            >
              {/* All Button - Responsive text and padding */}
              <div>
                <button
                  onClick={() => {
                    setfilter("All");
                    setIsCategorySelected(() => {
                      return {
                        All: true,
                        Courses: false,
                        Events: false,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  className={`hover:text-thankYouColor hover:font-semibold transition-colors duration-200 text-xs sm:text-sm md:text-base px-1 sm:px-2 ${
                    IsCategorySelected.All
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  All
                </button>
              </div>
              {/* Courses Button */}
              <div>
                <button
                  onClick={() => {
                    setfilter("Courses");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Courses: true,
                        Events: false,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  className={`hover:text-thankYouColor hover:font-semibold transition-colors duration-200 text-xs sm:text-sm md:text-base px-1 sm:px-2 ${
                    IsCategorySelected.Courses
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Courses
                </button>
              </div>

              {/* Events Button */}
              <div>
                <button
                  onClick={() => {
                    setfilter("Events");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Courses: false,
                        Events: true,
                        Stories: false,
                      };
                    });
                  }}
                  type="button"
                  className={`hover:text-thankYouColor hover:font-semibold transition-colors duration-200 text-xs sm:text-sm md:text-base px-1 sm:px-2 ${
                    IsCategorySelected.Events
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Events
                </button>
              </div>

              {/* Stories Button */}
              <div>
                <button
                  onClick={() => {
                    setfilter("Stories");
                    setIsCategorySelected(() => {
                      return {
                        All: false,
                        Courses: false,
                        Events: false,
                        Stories: true,
                      };
                    });
                  }}
                  type="button"
                  className={`hover:text-thankYouColor hover:font-semibold transition-colors duration-200 text-xs sm:text-sm md:text-base px-1 sm:px-2 ${
                    IsCategorySelected.Stories
                      ? "text-thankYouColor border-b-2 border-thankYouColor"
                      : ""
                  }`}
                >
                  Stories
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Activities Grid - Fully responsive with skeleton loading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          {loading ? (
            // Show skeleton loaders while data is fetching
            <SkeletonGrid items={8} />
          ) : (
            // Render actual activity cards when data is loaded
            filteredData?.map((post, index) => {
              return <CardOfActivities key={index} data={post} />;
            })
          )}
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};
