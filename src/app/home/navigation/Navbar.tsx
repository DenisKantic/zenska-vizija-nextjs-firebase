"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div
      className="fixed lg:w-[92%] lg:left-3 shadow-xl bg-[#fff] mt-2 md:mr-12 sm:left-3 xs:mr-2
        lg:h-[13%] md:h-[10%] sm:h-[42px] xs:w-[95%] xxs:w-[98%] rounded-[16px] top-0 z-10 right-1 lg:ml-10"
    >
      <div className="lg:hidden md:hidden sm:hidden xs:absolute xs:right-3 xxs:absolute xxs:right-3">
        {showNav ? (
          <Image
            className="h-4 w-4 cursor-pointer"
            onClick={toggleNav}
            src="/images/landing/x_icon.png"
            alt="x-icon"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/images/landing/hamburger_menu_icon.png"
            className="h-10 w-12 cursor-pointer px-3 pt-5"
            onClick={toggleNav}
            alt="hamburger-menu"
            width={50}
            height={50}
          />
        )}
      </div>
      <div
        className="flex lg:justify-between xs:flex-col xs:items-start
        lg:flex-row md:flex-row sm:flex-row items-center lg:h-full lg:w-full"
      >
        <div className="flex xs:items-start lg:ml-5 md:ml-4 sm:ml-3">
          <Link href="/home">
            <Image
              src="/images/zenskaBG.png"
              alt="logo"
              width={110}
              height={110}
              className="px-3 lg:py-3 md:mt-1 sm:mt-0 xs:pt-1 cursor-pointer 
              lg:w-[110px] md:w-20 sm:w-[75px]"
              priority
            />
          </Link>
        </div>
        {/* start of the nav list */}
        <div className="lg:my-auto lg:px-2 md:my-auto">
          <ul
            className={`lg:flex md:flex sm:flex xs:items-start lg:mx-auto md:ml-5 
          sm:mx-auto sm:mr-4 lg:mr-2 lg:gap-2 sm:gap-2 xs:space-y-2 xs:py-3 ${
            showNav ? "" : "hidden"
          }`}
          >
            {/* about-us */}
            <li
              className="flex rounded-[16px] lg:hover:bg-crayola lg:hover:text-white
           lg:px-2 md:py-1 md:px-2 xs:space-x-2 xs:px-4 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/information-circle.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#about-us"
                className="lg:text-[16px] md:text-[12px] lg:hover:text-white xs:hover:text-crayola
              sm:text-[10px] whitespace-nowrap sm:py-1 sm:px-2 lg:py-2 lg:my-2"
              >
                O nama
              </a>
            </li>
            {/* programs */}
            <li
              className="flex lg:hover:bg-crayola lg:hover:text-white rounded-[16px]
           lg:px-2 md:px-2 xs:space-x-2 xs:px-4 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/programs_icon.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#programs"
                className="lg:text-[16px] md:text-[12px] sm:text-[10px] md:py-1 lg:py-2
              sm:px-2 lg:hover:text-white xs:hover:text-crayola md:hover:text-white"
              >
                Programi
              </a>
            </li>
            {/* events */}
            <li
              className="flex lg:hover:bg-crayola lg:hover:text-white rounded-[16px]
           lg:px-5 md:px-2 xs:space-x-2 xs:px-4 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/events_icon.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#events"
                className="lg:text-[16px] md:text-[12px] sm:text-[10px] md:hover:text-white
              sm:px-2 lg:py-3 lg:hover:text-white xs:hover:text-crayola"
              >
                Događaji
              </a>
            </li>
            {/* blog */}
            <li
              className="flex lg:hover:bg-crayola lg:hover:text-white rounded-[16px]
           lg:px-5 lg:py-2 md:py-1 md:px-2 sm:mt-2 lg:mt-1 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/blog_icon.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#blogs"
                className="lg:text-[16px] md:text-[12px] sm:text-[10px] md:hover:text-white
              sm:py-1 sm:px-2 lg:hover:text-white xs:hover:text-crayola"
              >
                Blog
              </a>
            </li>
            {/* gallery */}
            <li
              className="flex lg:hover:bg-crayola lg:hover:text-white rounded-[16px]
           lg:px-5 lg:py-2 md:py-1 md:px-2 sm:mt-2 lg:mt-1 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/gallery_icon.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#gallery"
                className="lg:text-[16px] md:text-[12px] sm:text-[10px] md:hover:text-white
              sm:py-1 sm:px-2 lg:hover:text-white xs:hover:text-crayola"
              >
                Galerija
              </a>
            </li>
            {/* contact */}
            <li
              className="flex lg:hover:bg-crayola lg:hover:text-white rounded-[16px]
           lg:px-5 lg:py-2 md:py-1 md:px-2 sm:mt-2 lg:mt-1 md:hover:bg-crayola"
            >
              <Image
                src="/images/landing/contact_icon.png"
                alt="home"
                className="w-6 h-6 lg:hidden md:hidden sm:hidden"
                width={20}
                height={20}
              />
              <a
                href="#contact"
                className="lg:text-[16px] md:text-[12px] sm:text-[10px] md:hover:text-white
              sm:py-1 sm:px-2 lg:hover:text-white xs:hover:text-crayola"
              >
                Kontaktiraj nas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
