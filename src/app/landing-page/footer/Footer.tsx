"use client";
import React from "react";
import Image from "next/image";

import companyLogo from "../../../../public/images/landing/company_logo.png";
import mailIcon from "../../../../public/images/landing/mail_icon.png";
import locationIcon from "../../../../public/images/landing/location_icon.png";
import phoneIcon from "../../../../public/images/landing/phone_icon.png";
import facebook from "../../../../public/images/landing/facebook_logo.png";
import tiktok from "../../../../public/images/landing/tiktok_logo.png";

const Footer = () => {
  return (
    <>
      <div
        className="container bg-lotion pl-10 py-24 mx-auto flex md:items-center 
			md:flex-row md:flex-nowrap flex-wrap flex-col rounded-[16px]"
      >
        <div className="w-64 pl-8 flex-shrink-0 md:mx-0 md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={companyLogo} alt="company-logo" />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center gap-5">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Linkovi
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">O nama</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Programi</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Događaji</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Galerija</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Podrška
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Politika Privatnosti
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Uslovi korištenja
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pomoć</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Kontakt
            </h2>
            <nav className="list-none mb-10">
              <div className="flex items-center space-x-3">
                <Image src={mailIcon} alt="mail-icon" />
                <p className="text-[16px] text-chineseBlackLight">
                  info@zenska-vizija.org
                </p>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-2">
                <Image src={locationIcon} alt="location-icon" />
                <p className="text-[16px] text-chineseBlackLight">
                  Mihaila I Zivka Crnogorcevica 9, Tuzla, BiH
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-1">
                <Image src={phoneIcon} alt="phone-icon" />
                <p className="text-[16px] text-chineseBlackLight">
                  +38760 123456
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={facebook} alt="facebook-icon" />
                <Image src={tiktok} alt="tiktok-icon" />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Ženska Vizija 2024. Sva prava zadržava.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
