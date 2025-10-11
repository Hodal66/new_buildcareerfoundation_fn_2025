"use client";

import { Carousel } from "flowbite-react";

export default function DefaultCarousel() {
  return (
    // Responsive carousel with adaptive height container
    <div className="
      h-64
      sm:h-80
      md:h-96
      lg:h-[32rem]
      xl:h-[36rem]">
      <Carousel>
        {/* Images with responsive sizing and object-fit */}
        <img
          alt="Carousel slide 1"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          className="object-cover w-full h-full"
        />
        <img
          alt="Carousel slide 2"
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          className="object-cover w-full h-full"
        />
        <img
          alt="Carousel slide 3"
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          className="object-cover w-full h-full"
        />
        <img
          alt="Carousel slide 4"
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          className="object-cover w-full h-full"
        />
        <img
          alt="Carousel slide 5"
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          className="object-cover w-full h-full"
        />
      </Carousel>
    </div>
  );
}
