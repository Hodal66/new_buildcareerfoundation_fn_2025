/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { Carousel, Modal, Button } from "flowbite-react";

export default function CarouselInterval({ image_array }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle closing the modal
  const handleModalClose = () => setSelectedImage(null);

  return (
    <>
      {/* Carousel Section with responsive margin: Mobile: mb-16, Tablet: mb-20, Desktop: mb-28 */}
      <div className="
        mb-16
        sm:mb-20
        md:mb-24
        lg:mb-28
        h-64
        sm:h-80
        md:h-96
        lg:h-[32rem]">
        <Carousel slideInterval={10000}>
          {image_array &&
            image_array.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={`Event image ${index + 1}`}
                className="object-cover w-full h-full cursor-pointer hover:opacity-95 transition-opacity duration-200"
                onClick={() => setSelectedImage(item.url)}
              />
            ))}
        </Carousel>
      </div>

      {/* Modal Popup with responsive sizing */}
      <Modal
        show={!!selectedImage}
        onClose={handleModalClose}
        size="xl"
        dismissible={true}
      >
        <Modal.Header>
          {/* Header with responsive text size: Mobile: text-base, Tablet: text-lg */}
          <h2 className="font-semibold
            text-base
            sm:text-lg" id="modal-title">
            Full Image View
          </h2>
        </Modal.Header>
        <Modal.Body>
          {/* Image container with responsive padding */}
          <div className="flex justify-center items-center
            p-2
            sm:p-4">
            <img
              src={selectedImage}
              alt="Full view of event image"
              className="w-full max-h-screen object-contain"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
