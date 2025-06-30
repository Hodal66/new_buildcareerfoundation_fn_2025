// import React from 'react';
"use client";

import { Carousel } from "flowbite-react";

const CorouselComp = () => {
  return (
    <Carousel leftControl="left" rightControl="right">
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  );
};

export default CorouselComp;
