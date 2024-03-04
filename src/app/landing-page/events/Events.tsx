"use client";

import EventCard from "./EventCard";
// assets
import event1 from "../../../../public/images/landing/events_1.png";
import event2 from "../../../../public/images/landing/events_2.png";
import event3 from "../../../../public/images/landing/events_3.png";
import event4 from "../../../../public/images/landing/events_4.png";
import locationIcon from "../../../../public/images/landing/location_icon.png";
import clockIcon from "../../../../public/images/landing/clock_icon.png";
import attenderIcon from "../../../../public/images/landing/attender_icon.png";
// constants
import { dummyData } from "./data/dummyData";

const Events = () => {
  return (
    <>
      <div className="flex items-center justify-center font-bold text-5xl pt-8 px-6 mt-14 text-chineseBlack">
        <h1 className="mt-8">Skorašnji Događaji</h1>
      </div>
      <div className="flex items-center justify-center text-chineseBlack opacity-80 text-xl py-5 mb-3">
        <p>
          Vrlo često organizujemo događaje na razne teme, jer brinemo o našim
          članicama
        </p>
      </div>
      <div className="flex flex-wrap mx-4 px-6 py-4">
        <EventCard
          imageSrc={event1}
          title="4.Decembar, 2023"
          heading="Sve jednake i vidljive."
          description={dummyData.description1}
          locationIcon={locationIcon}
          clockIcon={clockIcon}
          time="13:00 - 14:30"
          attenderIcon={attenderIcon}
          attenders="13"
        />
        <EventCard
          imageSrc={event2}
          title="29.Novembar, 2023"
          heading="Panel diskusija: Femicid se ne dogadja slucajno!"
          description={dummyData.description2}
          locationIcon={locationIcon}
          clockIcon={clockIcon}
          time="13:00 - 14:30"
          attenderIcon={attenderIcon}
          attenders="44"
        />
        <EventCard
          imageSrc={event3}
          title="17. i  18.Novembar, 2023"
          heading="Online radionica: Nasilje u vezamaa mladih."
          description={dummyData.description3}
          locationIcon={locationIcon}
          clockIcon={clockIcon}
          time="11:00"
          attenderIcon={attenderIcon}
          attenders="21"
        />
        <EventCard
          imageSrc={event4}
          title="5.Novembar, 2023"
          heading="Pravedan tretman žene žrtve nasilja u sistemu zaštite - Pravo i potreba."
          description={dummyData.description4}
          locationIcon={locationIcon}
          clockIcon={clockIcon}
          time="12:00 - 13:30"
          attenderIcon={attenderIcon}
          attenders="21"
        />
      </div>
    </>
  );
};

export default Events;
