"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/FirebaseConfig";
// components
import EventCard from "./EventCard";

const Events = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [events, setEvents] = useState([]);

  // get events from firestore
  const getEvents = () => {
    const eventsCollectionRef = collection(db, "event");

    getDocs(eventsCollectionRef)
      .then((response) => {
        const eventData: any = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setEvents(eventData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    console.log("svi dogadjaji: ", events);
  }, [events]);

  {
    /*pagination logic*/
  }
  const handleNextBlogs = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrevBlogs = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const currentEvents = events.slice(startIndex, startIndex + 4);
  const currentPage = Math.floor(startIndex / 4) + 1;
  const totalPages = Math.ceil(events.length / 4);

  return (
    <>
      <div className="flex items-center justify-center font-bold text-5xl py-8 px-6 mt-10 text-chineseBlack">
        <h1>Skorašnji Događaji</h1>
      </div>
      <div className="flex items-center justify-center text-chineseBlack opacity-80 text-xl pt-5 pb-7 my-3">
        <p>
          Vrlo često organizujemo događaje na razne teme, jer brinemo o našim
          članicama
        </p>
      </div>
      <div className="flex mt-4 justify-end items-center mr-4 mb-2 py-4 px-5">
        <span className="text-chineseBlack mr-4 pr-4">
          Vidi starije događaje
        </span>
        <div className="flex space-x-2 mr-8">
          <div className="px-2">
            <Image
              className="hover:text-purplePizzazz h-full w-full"
              src="/images/landing/grayArrow.png"
              alt="grayArrow"
              width={100}
              height={100}
              onClick={handlePrevBlogs}
            />
          </div>
          <div className="px-3">
            <Image
              className=" hover:text-grayy h-full w-full"
              src="/images/landing/pinkArrow.png"
              alt="pinkArrow"
              width={100}
              height={100}
              onClick={handleNextBlogs}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-4 px-10 py-4">
        {currentEvents.map((event: any) => (
          <EventCard
            key={event.id}
            imageURL={event.data.imageURL}
            title={event.data.title}
            time={event.data.time}
            description={event.data.description}
            location={event.data.location}
            locationIcon="/images/landing/pink_location.png"
            clockIcon="/images/landing/pink_clock_icon.png"
            calendarIcon="/images/landing/pink_calendar_icon.png"
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <span className="text-chineseBlack mr-1 mt-1">
          {currentPage}/{totalPages}
        </span>
      </div>
    </>
  );
};

export default Events;
