"use client";
import Image from "next/image";
import Link from "next/link";
import phoneIcon from "../../../../public/images/landing/phone_icon.png";

const Footer = () => {
  const scrollTo = (route: any) => {
    const element = document.getElementById(`${route}`);
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
        className="bg-lotion pl-12 lg:pt-12 md:pt-8 mx-auto flex md:items-center 
			lg:flex-row md:flex-nowrap lg:flex-wrap flex-col rounded-[16px]"
      >
        <div className="lg:w-64 md:w-full lg:pr-8 sm:pt-2 xs:pt-2 xs:pr-4 lg:flex-shrink-0 md:text-center">
          <a className="flex title-font font-medium items-center justify-center sm:mb-2 md:mb-4 text-gray-900">
            <Image
              src="/images/landing/company_logo.png"
              alt="company-logo"
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className="flex-grow flex lg:flex-wrap lg:-mb-10 md:mt-2 lg:mt-10 lg:gap-3 lg:pl-6 xs:pt-2">
          <div className="lg:w-1/4 md:w-1/2 xs:w-1/3 w-full lg:px-2 md:mb-4">
            <h2 className="font-medium text-chineseBlackLight lg:text-[16px] md:text-[16px] lg:mb-3 xs:text-[14px]">
              Linkovi
            </h2>
            <nav
              className="list-none mb-10 py-2 gap-2 flex flex-col items-start cursor-pointer lg:text-[14px]
            xs:text-[11px]"
            >
              <li>
                <a className="text-chineseBlackLight hover:text-crayola">
                  <Link href="/about_us">O nama</Link>
                </a>
              </li>
              <li onClick={() => scrollTo("programs")}>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Programi
                </a>
              </li>
              <li onClick={() => scrollTo("events")}>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Događaji
                </a>
              </li>
              <li onClick={() => scrollTo("blog")}>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Blog
                </a>
              </li>
              <li onClick={() => scrollTo("gallery")}>
                <a className="text-chineseBlackLight hover:text-crayola">
                  Galerija
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 xs:w-1/3 w-full md:pl-4 lg:ml-2">
            <div className="flex flex-col items-start cursor-pointer gap-2">
              <h2 className="font-medium text-chineseBlackLight lg:text-[16px] xs:text-[14px] lg:mb-4 md:text-[16px] ">
                Podrška
              </h2>
              <a className="lg:text-[14px] xs:text-[11px] text-chineseBlackLight hover:text-crayola">
                Politika Privatnosti
              </a>
              <a className="lg:text-[14px] xs:text-[11px] text-chineseBlackLigh hover:text-crayola">
                Uslovi korištenja
              </a>
              <a className="text-chineseBlackLight hover:text-crayola lg:text-[14px] xs:text-[11px]">
                Pomoć
              </a>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 xs:w-1/3 w-full md:pl-4 ml-2 xs:space-y-2 lg:space-y-2">
            <h2 className="font-medium text-chineseBlackLight lg:text-[16px] xs:text-[14px] lg:mb-4 xs:pb-1 md:text-[16px]">
              Kontakt
            </h2>
            {/* Location */}
            <div className="flex items-center lg:space-x-2 xs:gap-2">
              <Image
                src="/images/landing/location_icon.png"
                alt="location-icon"
                width={18}
                height={18}
                className="w-full h-full xs:w-4 lg:w-[10%]"
              />
              <p className="lg:text-[14px] xs:text-[11px] text-chineseBlackLight lg:text-left">
                Mihaila I Zivka Crnogorcevica 9, Tuzla
              </p>
            </div>
            {/* Mail */}
            <div className="flex items-center lg:space-x-2 lg:gap-2 xs:gap-2">
              <Image
                src="/images/landing/mail_icon.png"
                alt="mail-icon"
                width={16}
                height={16}
                className="w-full h-full xs:w-4 lg:w-[8%]"
              />
              <p className="lg:text-[14px] xs:text-[11px] text-chineseBlackLight">
                info@zenska-vizija.org
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center lg:space-x-2 lg:gap-2 xs:gap-2">
              <Image
                src="/images/landing/phone_icon.png"
                alt="phone-icon"
                width={19}
                height={19}
                className="w-full h-full xs:w-4 lg:w-[8%]"
              />
              <p className="lg:text-[14px] xs:text-[10px] text-chineseBlackLight lg:px-2">
                +38760 123456
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-4 pb-2">
          <p className="text-chineseBlackLight opacity-80 text-[12px]">
            © Ženska Vizija 2024. Sva prava zadržava.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
