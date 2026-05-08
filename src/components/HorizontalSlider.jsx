/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function HorizontalSlider({ imageArr }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % imageArr.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + imageArr.length) % imageArr.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="opacity-0 group-hover:opacity-100 cursor-pointer absolute left-0 z-10 bg-black/30 rounded-full text-white transition-opacity duration-300 hover:bg-black/50"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide py-4"
        >
          {imageArr.map((item, index) => (
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="inline-block cursor-pointer rounded-xl mx-2
                w-44 h-32 object-cover
                sm:w-52 sm:h-36
                md:w-56 md:h-40
                lg:w-[240px] lg:h-44 shadow-lg"
              src={item}
              alt={`Gallery image ${index + 1}`}
              key={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-0 group-hover:opacity-100 cursor-pointer absolute right-0 z-10 bg-black/30 rounded-full text-white transition-opacity duration-300 hover:bg-black/50"
          onClick={slideRight}
          size={40}
        />
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </motion.button>

            <button
              className="absolute left-4 sm:left-10 text-white hover:text-orange-500 transition-colors bg-white/10 p-3 rounded-full hidden sm:block"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageArr[selectedIndex]}
                alt={`Full view ${selectedIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-medium bg-black/50 px-4 py-1 rounded-full">
                {selectedIndex + 1} / {imageArr.length}
              </div>
            </motion.div>

            <button
              className="absolute right-4 sm:right-10 text-white hover:text-orange-500 transition-colors bg-white/10 p-3 rounded-full hidden sm:block"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>
            
            {/* Mobile Controls */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 sm:hidden">
              <button
                className="text-white bg-white/10 p-4 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="text-white bg-white/10 p-4 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HorizontalSlider;
