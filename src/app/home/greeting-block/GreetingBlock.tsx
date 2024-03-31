"use client";
import React from "react";

const GreetingBlock = () => {
  return (
    <div className="mb-6 px-6 py-4">
      <div className="flex justify-center items-center mt-6 lg:py-4">
        <p
          className="lg:text-[48px] md:text-[32px] sm:text-[26px] xs:text-[22px] xs:mb-4 font-bold opacity-80
         text-chineseBlackLight"
        >
          Nisi sama!
        </p>
      </div>
      <div
        className="flex justify-between lg:gap-4 md:gap-4 sm:gap-3 xs:gap-2 w-full text-center 
      items-stretch lg:px-4 lg:py-4 xs:py-6"
      >
        <div className="bg-white flex-1 w-1/2 rounded-[16px] px-4 py-6">
          <p className="text-chineseBlackLight opacity-80 md:text-[16px] lg:text-[18px] sm:text-[14px] xs:text-[12px]">
            Nasilje nije tvoja krivica. Ne zaslužuješ da budeš povrijeđena,
            ponižena ili zastrašena. Tvoje tijelo je hram ljubavi, dostojanstva
            i samopoštovanja. Nemoj da dozvoliš da te nasilnik odvede u tamu
            koja ti pokušava uzeti snagu.
          </p>
        </div>
        <div className="bg-white flex-1 w-1/2 rounded-[16px] px-6 lg:pt-10 md:pt-10 sm:pt-10 xs:pt-12">
          <p className="text-chineseBlackLight opacity-80 md:text-[16px] lg:text-[18px] xs:my-auto sm:text-[14px] xs:text-[12px]">
            Tvoje srce zaslužuje da ljubi i bude voljeno, tvoj um zaslužuje mir
            i sigurnost. Obrati nam se slobodno, nisi sama, mi smo tvoj podrška.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetingBlock;
