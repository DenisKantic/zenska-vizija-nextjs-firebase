"use client";
import Image from "next/image";

import { imageList } from "./data/dummyData";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="bg-crayola flex flex-col items-center">
        <div className="lg:py-8 lg:mt-6">
          <h3
            className="text-center font-bold text-lotion lg:text-5xl sm:text-[30px] md:text-[34px] xs:text-[26px] 
          mt-8"
          >
            Galerija
          </h3>
        </div>
        <div className="max-w-5xl p-5 mt-8 mb-10 gap-2 columns-3">
          {imageList.map((image, index) => (
            <div key={index} className="pl-3 pb-3 pr-3 flex flex-col mb-2">
              <Image
                src={image.imgSrc}
                alt="gallery"
                width={200}
                height={200}
                className="rounded-[12px] shadow-xl shadow-chineseBlack w-full h-full
              cursor-pointer transition ease-in-out duration-300 lg:hover:scale-75 hover:translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
