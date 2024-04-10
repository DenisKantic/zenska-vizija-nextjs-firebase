"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const scrollTo = (route: any) => {
    const element = document.getElementById(`${route}`);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  return (
    <div className="fixed z-50 w-[92%] py-3 shadow-xl bg-[#fff] mt-2 ml-14 rounded-[16px]">
      <div className="flex justify-between items-center h-full w-full px-6 2xl:px-16">
        <div className="ml-4">
          <Link href="/login">
            <Image
              src="/images/zenskaBG.png"
              alt="logo"
              width={110}
              height={110}
              className="px-3 ml-4 mt-1 cursor-pointer"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex mr-12 gap-4">
            <li onClick={() => scrollTo('aboutUs')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
                O nama
              </a>
            </li>

            <li onClick={() => scrollTo('programs')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
                Programi
              </a>
            </li>

            <li onClick={() => scrollTo('events')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
                Događaji
              </a>
            </li>

            <li onClick={() => scrollTo('blog')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
                Blog
              </a>
            </li>

            <li onClick={() => scrollTo('gallery')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
                Galerija
              </a>
            </li>

            <li onClick={() => scrollTo('contact')} className="cursor-pointer hover:bg-crayola hover:text-white rounded-[16px] px-5 py-3">
              <a className="text-[16px]">
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
