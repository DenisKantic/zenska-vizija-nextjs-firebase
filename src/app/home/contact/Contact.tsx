"use client";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-2 flex flex-col md:flex-row justify-center items-center mt-12 lg:mx-10 xs:mx-4 md:px-8 mb-8 
      lg:py-4 bg-lotion rounded-[16px]"
    >
      <div className="flex flex-col w-full md:w-1/2 lg:py-2 px-5 xs:py-4">
        <div className="lg:py-2 lg:mt-3">
          <h2
            className="lg:text-5xl md:text-2xl xs:text-[22px] sm:text-[26px] md:py-3 text-chineseBlackLight 
          font-bold opacity-80 xs:py-3"
          >
            Kontakt
          </h2>
          <p
            className="lg:text-[16px] md:text-[14px] xs:text-[12px] text-chineseBlackLight 
          lg:pb-2 lg:my-2 md:my-2"
          >
            Za bilo koje informacije, molimo vas da nam se obratite ili putem
            društvenih mreža ili putem email-a.
          </p>
        </div>
        <div
          className="flex lg:space-x-6 md:space-x-3 xs:space-x-2 lg:pr-5 lg:mb-3 
        md:py-2 md:mb-2 xs:py-3 mt-2 mr-5"
        >
          <button
            className="bg-purplePizzazz text-white hover:bg-grayy lg:text-[16px] md:text-[14px] flex-grow 
            lg:py-3 lg:px-4 rounded-[16px] flex justify-center items-center space-x-2 md:py-2 md:px-2 xs:text-[12px]
            xs:py-2 xs:px-2"
          >
            <Image
              src="/images/landing/facebook_logo.png"
              width={12}
              height={12}
              alt="facebook-icon"
            />
            <span>Facebook</span>
          </button>
          <button
            className="bg-crayola text-white lg:text-[16px] flex flex-grow lg:py-3 lg:px-4 rounded-[16px] 
					justify-center items-center space-x-2 hover:bg-grayy md:py-2 md:px-2 md:text-[14px] xs:text-[12px]
          xs:py-2 xs:px-2"
          >
            <Image
              src="/images/landing/tiktok_logo.png"
              alt="tiktok-icon"
              width={17}
              height={17}
            />
            <span>Tik Tok</span>
          </button>
        </div>
        <div className="flex flex-col lg:space-y-4 md:space-y-2 xs:space-y-2 xs:mt-2 lg:pt-2 lg:mt-5">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/landing/mail_icon.png"
              width={19}
              height={19}
              alt="mail-icon"
            />
            <p className="lg:text-[16px] md:text-[14px] xs:text-[12px] text-chineseBlackLight opacity-80">
              info@zenska-vizija.org
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/landing/location_icon.png"
              alt="location-icon"
              width={18}
              height={18}
            />
            <p className="lg:text-[16px] md:text-[14px] xs:text-[12px] text-chineseBlackLight opacity-80">
              Mihaila I Zivka Crnogorcevica 9, Tuzla, BiH
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/landing/phone_icon.png"
              alt="phone-icon"
              width={20}
              height={20}
            />
            <p className="lg:text-[16px] md:text-[14px] xs:text-[12px] text-chineseBlackLight opacity-80">
              +38760 123456
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:w-1/2 p-2 md:py-8">
        {/* Embedded Google Map */}
        <iframe
          className="w-full h-full lg:h-[400px] md:h-[300px] rounded-[16px] mt-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45498.815361522684!2d18.634478709767258!3d44.54226702044187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ead03ad64e779%3A0xa667fa80a17fd8cb!2sTuzla!5e0!3m2!1sen!2sba!4v1709570652260!5m2!1sen!2sba"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
