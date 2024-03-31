"use client";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section>
      <div className="mx-auto flex px-16 pt-12 py-4 mb-10 pb-4 md:flex-row flex-col items-center mt-4">
        <div className="flex md:w-1/2 w-full mb-10 md:mb-0 h-full">
          <div className="w-full h-full flex flex-col">
            <div className="lg:h-[50%]">
              <Image
                className="object-cover rounded-[24px] lg:w-[592px] LG:h-[392px] p-3"
                alt="hero"
                src="/images/landing/about_us-img.png"
                width={592}
                height={392}
              />
            </div>
            <div className="flex w-full h-[50%] lg:pr-4 py-1">
              <div className="w-1/2 lg:p-3 xs:p-2">
                <Image
                  src="/images/landing/about_us_1.png"
                  alt="Image 1"
                  className="object-cover object-center rounded-[24px] w-full h-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-1/2 lg:p-3 xs:p-2">
                <Image
                  src="/images/landing/about_us_2.png"
                  alt="Image 2"
                  className="object-cover object-center rounded-[24px] w-full h-full"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:pr-2 pb-4 mb-4
				  flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            className="sm:text-[22px] md:text-[26px] lg:text-5xl xs:text-[24px] mb-8 font-bold
             text-chineseBlackLight opacity-80"
          >
            O nama
          </h1>
          <div className="ml-1">
            <p className="mb-8">
              <span className="text-chineseBlack sm:text-[14px] lg:text-[18px] xs:text-[13px]">
                Udruženje {"Ženska Vizija"} je osnovano sa ciljem zaštite
                ženskih prava, zalaganje za jednakost i ravnopravnost žena u
                BIH. <br />
                Pružamo podršku ženama da prevaziđu svoja najbolnija iskustva i
                da ih osnažimo.
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <Link href="/about_us">
              <button
                className="inline-flex items-center justify-center text-white bg-purplePizzazz 
							border-0 lg:py-2 lg:px-6 focus:outline-none hover:text-purplePizzazz hover:bg-chineseBlackLight 
              hover:bg-opacity-10 rounded-[16px] lg:text-[16px] sm:text-[12px] w-40 h-12 sm:w-30 sm:h-12"
              >
                Pročitaj više
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
