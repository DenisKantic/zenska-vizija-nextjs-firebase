"use client";
import React from "react";
import Image from "next/image";

import facebook from "../../../../public/images/landing/facebook_logo.png";
import tiktok from "../../../../public/images/landing/tiktok_logo.png";
import mailIcon from "../../../../public/images/landing/mail_icon.png";
import locationIcon from "../../../../public/images/landing/location_icon.png";
import phoneIcon from "../../../../public/images/landing/phone_icon.png";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-12 mx-10 px-8 mb-8 py-4 bg-lotion rounded-[16px]">
      <div className="flex flex-col w-1/2 py-4 px-5">
        <div className="mb-4 py-4 mt-7">
          <h2 className="text-5xl text-chineseBlackLight font-bold ">
            Kontakt
          </h2>
        </div>
        <p className="text-[16px] text-chineseBlackLight pb-4 my-4">
          Za bilo koje informacije, molimo vas da nam se obratite ili putem
          društvenih mreža ili putem email-a.
        </p>
        <div className="flex space-x-4 mb-8 mt-4 mr-5">
          <button
            className="bg-purplePizzazz text-white text-[16px] flex-grow py-3 px-4 rounded-[16px] 
					flex justify-center items-center space-x-2"
          >
            <Image src={facebook} alt="facebook-icon" />
            <span>Facebook</span>
          </button>
          <button
            className="bg-crayola text-white text-[16px] flex flex-grow py-3 px-4 rounded-[16px] 
					justify-center items-center space-x-2"
          >
            <Image src={tiktok} alt="tiktok-icon" />
            <span>Tik Tok</span>
          </button>
        </div>
        <div className="flex flex-col space-y-6 pt-2 mt-2">
          <div className="flex items-center space-x-2">
            <Image src={mailIcon} alt="mail-icon" />
            <p className="text-[16px] text-chineseBlackLight">
              info@zenska-vizija.org
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={locationIcon} alt="location-icon" />
            <p className="text-[16px] text-chineseBlackLight">
              Mihaila I Zivka Crnogorcevica 9, Tuzla, BiH
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={phoneIcon} alt="phone-icon" />
            <p className="text-[16px] text-chineseBlackLight">+38760 123456</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-8">
        {/* Embedded Google Map */}
        <iframe
          className="w-full h-full rounded-[16px] mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45498.815361522684!2d18.634478709767258!3d44.54226702044187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ead03ad64e779%3A0xa667fa80a17fd8cb!2sTuzla!5e0!3m2!1sen!2sba!4v1709570652260!5m2!1sen!2sba"
          style={{ border: 0, height: "450px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
