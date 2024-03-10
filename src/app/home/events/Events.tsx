"use client";
import { useState } from "react";
import EventCard from "./EventCard";
import Image from "next/image";
// constants
import { dummyData } from "./data/dummyData";

const Events = () => {
  return (
    <>
      <div id="events" className="flex items-center justify-center font-bold text-5xl py-8 px-6 mt-10 text-chineseBlack">
        <h1>Skorašnji Događaji</h1>
      </div>
      <div className="flex items-center justify-center text-chineseBlack opacity-80 text-xl pt-5 pb-7 px-6 my-3">
        <p>
          Vrlo često organizujemo događaje na razne teme, jer brinemo o našim
          članicama
        </p>
      </div>
      <div className="flex mt-4 flex-wrap  justify-end items-center mr-4 mb-2 py-4 px-5">
        <span className="text-chineseBlack mr-4 pr-4">
          Vidi starije događaje
        </span>
        <div className="flex flex-wrap space-x-2 mr-8">
          <div className="px-2">
            <Image
              className="hover:text-purplePizzazz h-full w-full"
              src="/images/landing/grayArrow.png"
              alt="grayArrow"
              width={100}
              height={100}
            />
          </div>
          <div className="px-3">
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
      <div className="flex flex-wrap px-10 py-4">
        <EventCard
          imageSrc="/images/landing/events_1.png"
          title="4.Decembar, 2023"
          heading="Sve jednake i vidljive. Pridruzite nam se na ovom dogadjaju."
          description={dummyData.description1}
          locationIcon="/images/landing/pink_location.png"
          clockIcon="/images/landing/pink_clock_icon.png"
          time="13:00 - 14:30"
          attenderIcon="/images/landing/pink_attender_icon.png"
          calendarIcon="/images/landing/pink_calendar_icon.png"
          attenders="13"
        />
        <EventCard
          imageSrc="/images/landing/events_2.png"
          title="29.Novembar, 2023"
          heading="Panel diskusija: Femicid se ne dogadja slucajno!"
          description={dummyData.description2}
          locationIcon="/images/landing/pink_location.png"
          clockIcon="/images/landing/pink_clock_icon.png"
          time="13:00 - 14:30"
          attenderIcon="/images/landing/pink_attender_icon.png"
          calendarIcon="/images/landing/pink_calendar_icon.png"
          attenders="44"
        />
        <EventCard
          imageSrc="/images/landing/events_3.png"
          title="17. i  18.Novembar, 2023"
          heading="Online radionica: Nasilje u vezamaa mladih."
          description={dummyData.description3}
          locationIcon="/images/landing/pink_location.png"
          clockIcon="/images/landing/pink_clock_icon.png"
          time="11:00"
          attenderIcon="/images/landing/pink_attender_icon.png"
          calendarIcon="/images/landing/pink_calendar_icon.png"
          attenders="21"
        />
        <EventCard
          imageSrc="/images/landing/events_4.png"
          title="5.Novembar, 2023"
          heading="Pravedan tretman žene žrtve nasilja u sistemu zaštite - Pravo i potreba."
          description={dummyData.description4}
          locationIcon="/images/landing/pink_location.png"
          clockIcon="/images/landing/pink_clock_icon.png"
          time="12:00 - 13:30"
          attenderIcon="/images/landing/pink_attender_icon.png"
          calendarIcon="/images/landing/pink_calendar_icon.png"
          attenders="21"
        />
      </div>
    </>
  );
};

export default Events;
