"use client";
import Image from "next/image";
import React from "react";

import relationshipImg from "../../../../public/images/landing/nasilje_u_vezi.png";

const ImageSection = () => {
  return (
    <div className="flex items-center justify-center p-5">
      <Image
        src={relationshipImg}
        alt="relationship"
        className="w-full rounded-[16px] px-6 my-6"
      />
    </div>
  );
};

export default ImageSection;
