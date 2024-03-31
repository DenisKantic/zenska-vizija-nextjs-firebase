import { useState } from "react";
import Image from "next/image";

import { dummyData } from "./data/dummyData";

const CardSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevSet = () => {
    const newIndex = Math.max(startIndex - 3, 0);
    setStartIndex(newIndex);
    setCurrentPage(currentPage - 1);
  };

  const goToNextSet = () => {
    const newIndex = Math.min(startIndex + 3, dummyData.length - 3);
    setStartIndex(newIndex);
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(dummyData.length / 3);

  return (
    <div className="flex flex-col">
      <div
        className="flex mt-4 lg:justify-end sm:justify-end lg:items-center xs:justify-center lg:mr-4 lg:mb-4 lg:py-6 lg:px-5 
      md:py-3 sm:pl-4 sm:py-3 xs:py-4 xs:ml-7"
      >
        <span
          className="text-chineseBlack lg:pt-3 lg:mr-2 lg:pr-2 md:pr-2 md:mb-2 
        lg:text-xl sm:text-[14px] xs:text-[12px] xs:pb-2 xs:px-2"
        >
          Vidi druge programe
        </span>
        <div className="flex lg:space-x-2 lg:mr-8 sm:ml-2 sm:pt-0 xs:px-4 xs:pb-2">
          <div className="lg:px-2 xs:pr-2">
            <Image
              className="hover:text-purplePizzazz lg:h-full lg:w-full md:h-[80%] md:w-[80%] 
              sm:h-[80%] sm:w-[100%] xs:h-[80%] xs:w-[90%] cursor-pointer"
              src="/images/landing/grayArrow.png"
              alt="grayArrow"
              onClick={goToPrevSet}
              width={100}
              height={100}
            />
          </div>
          <div className="lg:px-3 xs:pl-2">
            <Image
              className=" hover:text-grayy lg:h-full lg:w-full md:h-[80%] md:w-[80%] 
              sm:h-[80%] sm:w-[100%] xs:h-[80%] xs:w-[90%] cursor-pointer"
              src="/images/landing/pinkArrow.png"
              alt="pinkArrow"
              onClick={goToNextSet}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div
        className="lg:p-4 sm:mt-3 sm:gap-2 sm:px-10 xs:gap-2 xs:px-6 flex sm:flex-col md:flex-row lg:flex-row 
        xs:flex-col lg:space-x-12 xs:space-y-2 justify-center xs:mt-2"
      >
        {dummyData.slice(startIndex, startIndex + 3).map((card, index) => (
          <div
            key={index}
            className=" bg-white shadow-lg rounded-xl flex flex-col items-center justify-center sm:px-1 lg:px-4"
          >
            <div className="flex justify-center items-center sm:px-2 xs:px-3">
              <h2 className="lg:text-2xl sm:text-[20px] xs:text-[16px] font-bold opacity-60 lg:py-6 sm:py-6 xs:py-4">
                {card.title}
              </h2>
            </div>
            <div className="flex-1 mb-2">
              <div className="flex justify-center items-center">
                <Image
                  src={card.backgroundImage}
                  alt={card.title}
                  width={354}
                  height={376}
                  className="py-1 lg:px-2 rounded-[16px] lg:w-[100%] sm:w-[85%] lg:h-[80%] xs:w-[80%] xs:h-[70%] "
                />
              </div>
              <div className="flex xs:px-7 py-4 lg:px-2">
                <button
                  className=" w-full lg:px-4 lg:py-2 bg-purplePizzazz text-white lg:text-xl sm:text-[12px]
                  rounded-[16px] hover:text-purplePizzazz hover:bg-chineseBlackLight 
                  hover:bg-opacity-10 xs:text-[10px] xs:py-2"
                >
                  <p>Saznaj Više</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrevSet}
          className="h-8 w-8 mr-2 text-gray-500 hover:text-gray-700"
          disabled={startIndex === 0}
        >
          &lt;
        </button>
        <span className="text-chineseBlack mr-1 mt-1">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={goToNextSet}
          className="h-8 w-8 ml-2 text-gray-500 hover:text-gray-700"
          disabled={startIndex + 3 >= dummyData.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
