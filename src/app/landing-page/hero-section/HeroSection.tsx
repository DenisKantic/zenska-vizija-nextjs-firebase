"use client";
import Image from "next/image";
import heroImg from "../../../../public/images/landing/hero_img.png";

const HeroSection = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col py-12">
        <div
          className="bg-crayola w-1/2 md:w-1/2 lg:pr-24 md:pl-16 flex flex-col md:items-start 
          md:text-left text-center items-center justify-center"
        >
          <div className="leading-5">
            <h1 className="sm:text-4xl text-5xl mb-4 font-bold text-white">
              U ZNAK <br /> SOLIDARNOSTI <br /> ZA NAŠA PRAVA
            </h1>
            <p className="text-white mb-8 text-[20px]">
              Posvećeni smo borbi za pravednost, jednakost i autonomiju svih
              žena.
            </p>
          </div>
          <div className="flex my-4 md:mb-0">
            <button
              className="inline-flex items-center justify-center text-white  bg-purplePizzazz
                  border-0 py-2 px-6 focus:outline-none hover:text-purplePizzazz hover:bg-brightGray 
                   rounded-[16px] text-[14px] lg:w-169 lg:h-43 sm:w-48 sm:h-12"
            >
              Kontakiraj nas
            </button>
          </div>
        </div>
        <div className="w-1/2 md:w-1/2">
          <Image
            className="object-cover object-center"
            alt="hero"
            src={heroImg}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
