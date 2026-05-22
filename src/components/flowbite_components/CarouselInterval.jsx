/* eslint-disable react/prop-types */
"use client";

import { useState, useEffect, useCallback } from "react";
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";

export default function CarouselInterval({ image_array }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setDirection(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = useCallback(() => {
    if (!image_array || image_array.length === 0) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % image_array.length);
  }, [image_array]);

  const goPrev = useCallback(() => {
    if (!image_array || image_array.length === 0) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + image_array.length) % image_array.length);
  }, [image_array]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, goNext, goPrev]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 h-64 sm:h-80 md:h-96 lg:h-[32rem]">
        <Carousel slideInterval={10000}>
          {image_array &&
            image_array.map((item, index) => (
              <div key={index} className="relative w-full h-full group cursor-pointer" onClick={() => openLightbox(index)}>
                <img
                  src={item.url}
                  alt={`Event image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                </div>
              </div>
            ))}
        </Carousel>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && image_array && image_array.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex flex-col"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between px-4 sm:px-8 py-4 text-white shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
                  {activeIndex + 1} / {image_array.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:rotate-90"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Main Image Area */}
            <div
              className="flex-1 flex items-center justify-center relative overflow-hidden px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 sm:left-8 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Animated Image */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={image_array[activeIndex].url}
                  alt={`Image ${activeIndex + 1}`}
                  className="max-w-full max-h-[calc(100vh-200px)] object-contain rounded-2xl select-none"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 sm:right-8 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <FaChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div
              className="shrink-0 py-4 px-4 sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {image_array.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === activeIndex
                        ? "border-white scale-110 shadow-lg shadow-white/20"
                        : "border-transparent opacity-50 hover:opacity-80 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
