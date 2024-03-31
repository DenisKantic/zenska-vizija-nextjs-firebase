"use client";
import CardSlider from "./CardSlider";

const Programs = () => {
  return (
    <>
      <div
        id="programs"
        className="flex items-center justify-center font-bold text-5xl 
      pt-10 pb-4 px-6 mb-4 mt-8 text-chineseBlackLight"
      >
        <h1 className="lg:text-5xl sm:text-[26px] xs:text-[24px] opacity-80">
          Programi
        </h1>
      </div>
      <div className="lg:my-6 lg:px-6 lg:py-2 md:px-8 md:pr-8 sm:px-5 sm:py-4 xs:px-6 flex items-center justify-center">
        <p className="text-chineseBlackLight lg:opacity-80 lg:text-[20px] sm:text-[14px] xs:text-[12px] text-center">
          Ženska vizija vam pruža razne programe koje pomažu ženama u borbi
          protiv diskriminacije u svim životnim sferama. Takođe,
          <span className="lg:flex items-center justify-center">
            na njihovom individualnom osnaživanju.
          </span>
        </p>
      </div>
      <CardSlider />
    </>
  );
};

export default Programs;
