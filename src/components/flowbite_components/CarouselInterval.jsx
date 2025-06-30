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
      {/* Carousel Section */}
      <Carousel slideInterval={10000} className="mb-28">
        {image_array &&
          image_array.map((item, index) => (
            <img
              key={index}
              src={item.url}
              alt={`Event image ${index + 1}`}
              className="object-cover w-full h-auto cursor-pointer"
              onClick={() => setSelectedImage(item.url)}
            />
          ))}
      </Carousel>

      {/* Modal Popup */}
      <Modal
        show={!!selectedImage}
        onClose={handleModalClose}
        size="xl"
        dismissible={true} // Allows closing by clicking outside modal or pressing Esc
      >
        <Modal.Header>
          {/* A header can be added if desired */}
          <h2 className="text-lg font-semibold" id="modal-title">
            Full Image View
          </h2>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-center items-center">
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
