"use client";
import React from "react";
import Image from "next/image";

import companyLogo from "../../../../public/images/landing/company_logo.png";
import mailIcon from "../../../../public/images/landing/mail_icon.png";
import locationIcon from "../../../../public/images/landing/location_icon.png";
import phoneIcon from "../../../../public/images/landing/phone_icon.png";

const Footer = () => {
  return (
    <>
      <div
        className="container bg-lotion pl-10 py-12 mx-auto flex md:items-center 
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
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4 ml-2">
            <h2 className="font-medium text-chineseBlackLight text-[16px] mb-4">
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
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4 ml-4">
            <h2 className="font-medium text-chineseBlackLight text-[16px] mb-4">
              Kontakt
            </h2>
            {/* Location */}
            <div className="flex items-center space-x-2 gap-2 py-2">
              <Image src={locationIcon} alt="location-icon" />
              <p className="text-[16px] text-chineseBlackLight text-left">
                Mihaila I Zivka Crnogorcevica 9, Tuzla
              </p>
            </div>
            {/* Mail */}
            <div className="flex items-center space-x-2 gap-2 py-2">
              <Image src={mailIcon} alt="mail-icon" />
              <p className="text-[16px] text-chineseBlackLight">
                info@zenska-vizija.org
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-2 py-2">
              <Image src={phoneIcon} alt="phone-icon" />
              <p className="text-[16px] text-chineseBlackLight px-2">
                +38760 123456
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center pl-10 sm:text-left">
            © Ženska Vizija 2024. Sva prava zadržava.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
