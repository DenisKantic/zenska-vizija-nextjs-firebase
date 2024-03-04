"use client";
import React from "react";
import Image from "next/image";

import { imageList } from "./data/dummyData";

const Gallery = () => {
  return (
    <div className="bg-crayola">
      <div className="py-8 mt-6">
        <h3 className="text-center font-bold text-lotion text-5xl xl:text-6xl mt-8">
          Galerija
        </h3>
      </div>
      <div className="w-full max-w-5xl p-5 flex items-center justify-center mt-8 mb-10 gap-1 flex-col">
        {imageList.map((image, index) => (
          <div key={index} className="pl-3 pb-4 flex flex-col mb-2">
            <Image
              src={image.imgSrc}
              alt="gallery"
              className="rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
