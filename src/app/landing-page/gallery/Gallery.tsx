"use client";
import React from "react";
import Image from "next/image";

import { imageList } from "./data/dummyData";

const Gallery = () => {
  return (
    <div className="bg-crayola flex flex-col items-center justify-center">
      <div className="py-8 mt-6">
        <h3 className="text-center font-bold text-lotion text-5xl xl:text-6xl mt-8">
          Galerija
        </h3>
      </div>
      <div className="max-w-5xl p-5 mt-8 mb-10 gap-2 columns-3">
        {imageList.map((image, index) => (
          <div key={index} className="pl-3 pb-3 pr-3 flex flex-col mb-2">
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
