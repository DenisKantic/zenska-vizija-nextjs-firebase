"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/FirebaseConfig";
// components
import BlogCard from "./BlogCard";

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);

  // get blogs from firestore
  const getBlogs = () => {
    const blogsCollectionRef = collection(db, "blog");

    getDocs(blogsCollectionRef)
      .then((response) => {
        const blogData: any = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setBlogs(blogData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    console.log("svi blogovi: ", blogs);
  }, [blogs]);

  // pagination logic
  const handleNextBlogs = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrevBlogs = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const currentBlogs = blogs.slice(startIndex, startIndex + 4);
  const currentPage = Math.floor(startIndex / 4) + 1;
  const totalPages = Math.ceil(blogs.length / 4);

  return (
    <div id="blog" className="py-8">
      <div
        className="flex items-center justify-center font-bold text-5xl 
      lg:pt-10 pb-4 px-6 mb-4 lg:mt-10 sm:mt-10 text-chineseBlack"
      >
        <p className="lg:text-5xl sm:text-[26px] xs:text-[22px] opacity-80">
          Blog
        </p>
      </div>
      {/* Arrows */}
      <div
        className="flex mt-7 justify-end items-center xs:justify-center sm:justify-end lg:mr-4 lg:mb-4 lg:py-6 
        lg:px-5 sm:pl-4 sm:py-3 xs:py-4 xs:ml-7"
      >
        <span className="text-chineseBlack lg:text-xl sm:text-[16px] lg:pt-2 lg:pr-4 md:pr-1 md:mb-2 xs:pb-2 xs:px-2">
          Vidi druge objave
        </span>
        <div className="flex lg:space-x-2 lg:mr-8 sm:ml-3 sm:mt-1 xs:px-4 xs:pb-1 md:pb-3 xs:space-x-2">
          <div className="lg:px-2 xs:pr-2">
            <Image
              className="hover:text-purplePizzazz lg:h-full lg:w-full md:h-[80%] md:w-[80%] 
              sm:h-[80%] sm:w-[80%] xs:h-[80%] xs:w-[90%] cursor-pointer"
              src="/images/landing/grayArrow.png"
              alt="grayArrow"
              width={100}
              height={100}
              onClick={handlePrevBlogs}
            />
          </div>
          <div className="lg:px-3">
            <Image
              className=" hover:text-grayy lg:h-full lg:w-full md:h-[80%] md:w-[80%] 
              sm:h-[80%] sm:w-[80%] xs:h-[80%] xs:w-[90%] cursor-pointer"
              src="/images/landing/pinkArrow.png"
              alt="pinkArrow"
              width={100}
              height={100}
              onClick={handleNextBlogs}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 gap-7 px-6">
        {currentBlogs.map((blog: any) => (
          <BlogCard
            key={blog.id}
            blogId={blog.id}
            imageUrl={blog.data.imageURL}
            title={blog.data.title}
            description={blog.data.description}
            date={blog.data.date}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <span className="text-chineseBlack mr-1 mt-1">
          {currentPage}/{totalPages}
        </span>
      </div>
    </div>
  );
};

export default Blog;
