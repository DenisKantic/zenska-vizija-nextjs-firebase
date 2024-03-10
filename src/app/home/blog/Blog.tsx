"use client";
import { useState } from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";

import { blogData } from "./data/dummyData";

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPrevSet = () => {
    const newIndex = Math.max(startIndex - 3, 0);
    setStartIndex(newIndex);
    setCurrentPage(currentPage - 1);
  };

  const goToNextSet = () => {
    const newIndex = Math.min(startIndex + 3, blogData.length - 3);
    setStartIndex(newIndex);
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(blogData.length / 3);

  return (
    <div id="blog" className="py-8">
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
              className="hover:text-purplePizzazz h-full w-full"
              src="/images/landing/grayArrow.png"
              alt="grayArrow"
              width={100}
              height={100}
            />
          </div>
          <div className="px-1">
            <Image
              className=" hover:text-grayy h-full w-full"
              src="/images/landing/pinkArrow.png"
              alt="pinkArrow"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 gap-7 px-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            blogId={blog.id}
            imageUrl={blog.imageUrl}
            title={blog.title}
            description={blog.description}
            tag={blog.tag}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrevSet}
          className="h-8 w-8 mr-2 text-gray-500 hover:text-gray-700"
          disabled={startIndex === 0}
        >
          &lt;
        </button>
        <span className="text-chineseBlack mr-1 mt-1">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={goToNextSet}
          className="h-8 w-8 ml-2 text-gray-500 hover:text-gray-700"
          disabled={startIndex + 3 >= blogData.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blog;
