"use client";
import Image from "next/image";
import BlogCard from "./BlogCard";

import { blogData } from "./data/dummyData";

import grayArrow from "../../../../public/images/landing/grayArrow.png";
import pinkArrow from "../../../../public/images/landing/pinkArrow.png";

const Blog = () => {
  return (
    <div className="py-8">
      <div
        className="flex items-center justify-center font-bold text-5xl 
      pt-10 pb-4 px-6 mb-4 mt-10 text-chineseBlack"
      >
        <h1>Blog</h1>
      </div>
      <div className="flex mt-4 justify-end items-center mr-4 mb-4 py-6 px-5">
        <span className="text-chineseBlack mr-4 pr-4">Vidi druge programe</span>
        <div className="flex space-x-2 mr-8">
          <div className="px-2">
            <Image
              className="hover:text-purplePizzazz"
              src={grayArrow}
              alt="grayArrow"
            />
          </div>
          <div className="px-1">
            <Image
              className=" hover:text-grayy"
              src={pinkArrow}
              alt="pinkArrow"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 gap-7 px-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            imageUrl={blog.imageUrl}
            title={blog.title}
            description={blog.description}
            tag={blog.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
