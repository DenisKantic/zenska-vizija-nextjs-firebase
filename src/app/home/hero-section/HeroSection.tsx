"use client";
import Image from "next/image";

const HeroSection = () => {
  const scrollTo = () => {
    const element = document.getElementById("contact");
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <>
      <div
        className="flex md:flex-row lg:flex-row sm:flex-row xs:flex-col-reverse xxs:flex-col-reverse 
      lg:pb-12 h-full"
      >
        <div
          className="lg:pl-6 bg-crayola flex-wrap w-full md:w-1/2 md:px-4 md:py-4 flex flex-col md:items-start 
          md:text-left md:pt-8 text-center items-center justify-center"
        >
          <div className="lg:pt-8 md:pt-9 sm:pt-9 sm:mt-5">
            <h1
              className="md:text-2xl md:mb-1 lg:text-[34px] sm:text-[15px] lg:mb-2 lg:font-bold md:font-semibold
             text-white xs:py-1 lg:pt-4 lg:py-2 lg:px-7 lg:leading-10 xxs:text-[15px]"
            >
              U ZNAK SOLIDARNOSTI ZA NAŠA PRAVA
            </h1>
            <p
              className="text-white lg:mb-3 lg:text-[20px] md:text-[14px] md:mb-2 
            xs:text-[10px] xs:pb-1 sm:px-2 md:px-0 xxs:text-[9px] lg:px-7"
            >
              Posvećeni smo borbi za pravednost, jednakost i autonomiju svih
              žena.
            </p>
          </div>
          <div className="flex lg:my-2 lg:ml-6 md:mb-0 md:mt-2 sm:mt-1 xs:my-2 xxs:mt-4">
            <button
              onClick={() => scrollTo()}
              className="inline-flex items-center justify-center text-white  bg-purplePizzazz
                  border-0 lg:py-2 sm:px-2 sm:mt-2 xs:px-2 xs:py-2 focus:outline-none hover:text-purplePizzazz hover:bg-brightGray 
                   rounded-[16px] lg:text-[16px] md:text-[13px] sm:text-[10px] xs:text-[10px] lg:w-[180px] lg:h-[53px] md:w-[135px] 
                   md:h-[32px] sm:w-[90px] sm:h-[30px] xs:w-[85px] xs:h-[30px] xxs:text-[8px] xxs:py-1 xxs:px-2"
            >
              Kontakiraj nas
            </button>
          </div>
        </div>
        <div className="w-full  md:w-1/2">
          <Image
            className="object-cover object-center w-full h-full"
            alt="hero"
            src="/images/landing/hero_img.png"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
