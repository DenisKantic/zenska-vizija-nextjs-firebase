"use client";
import Image from "next/image";
import phoneIcon from "../../../../public/images/landing/phone_icon.png";

const Footer = () => {
  return (
    <>
      <div
        className="container bg-lotion pl-10 py-12 mx-auto flex md:items-center 
			md:flex-row md:flex-nowrap flex-wrap flex-col rounded-[16px]"
      >
        <div className="w-64 pl-10 flex-shrink-0 md:mx-0 md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/images/landing/company_logo.png"
              alt="company-logo"
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 gap-5">
          <div className="lg:w-1/4 md:w-1/2 w-full px-2">
            <h2 className="font-medium text-chineseBlackLight text-[16px] mb-3">
              Linkovi
            </h2>
            <nav className="list-none mb-10 py-2 gap-2 flex flex-col items-start cursor-pointer text-[14px]">
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  O nama
                </a>
              </li>
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Programi
                </a>
              </li>
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Događaji
                </a>
              </li>
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Galerija
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4 ml-2">
            <div className="flex flex-col items-start cursor-pointer gap-2">
              <h2 className="font-medium text-chineseBlackLight text-[16px] mb-4">
                Podrška
              </h2>
              <a className="text-[14px] text-chineseBlackLight hover:text-crayola">
                Politika Privatnosti
              </a>
              <a className="text-[14px] text-chineseBlackLigh hover:text-crayola">
                Uslovi korištenja
              </a>
              <a className="text-chineseBlackLight hover:text-crayola text-[14px]">
                Pomoć
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4 ml-4">
            <h2 className="font-medium text-chineseBlackLight text-[16px] mb-4">
              Kontakt
            </h2>
            {/* Location */}
            <div className="flex items-center space-x-2 gap-2 py-2">
              <Image
                src="/images/landing/location_icon.png"
                alt="location-icon"
                width={18}
                height={18}
              />
              <p className="text-[14px] text-chineseBlackLight text-left">
                Mihaila I Zivka Crnogorcevica 9, Tuzla
              </p>
            </div>
            {/* Mail */}
            <div className="flex items-center space-x-2 gap-3">
              <Image
                src="/images/landing/mail_icon.png"
                alt="mail-icon"
                width={16}
                height={16}
              />
              <p className="text-[14px] text-chineseBlackLight">
                info@zenska-vizija.org
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-2 py-2">
              <Image
                src="/images/landing/phone_icon.png"
                alt="phone-icon"
                width={19}
                height={19}
              />
              <p className="text-[14px] text-chineseBlackLight px-2">
                +38760 123456
              </p>
            </div>
          </div>
          <div className="ml-12 my-2 pl-8">
            <p className="text-chineseBlackLight opacity-80 text-[12px] sm:text-left">
              © Ženska Vizija 2024. Sva prava zadržava.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
