"use client";
import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  imageURL: string | StaticImageData;
  title: string;
  locationIcon: string | StaticImageData;
  location: string;
  clockIcon: string | StaticImageData;
  calendarIcon: string | StaticImageData;
  time: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageURL,
  title,
  locationIcon,
  clockIcon,
  time,
  calendarIcon,
  description,
  location,
}) => {
  return (
    <div className="sm:w-1/3 lg:w-1/2 p-4 flex justify-center">
      <div className="bg-white shadow-md p-7 flex rounded-[16px]">
        {/* start of icons */}
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-5">
              <div
                className="flex items-center gap-2 border-[1px] border-solid 
              rounded-[16px] border-purplePizzazz px-3 py-2"
              >
                <Image
                  src={locationIcon}
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="text-[12px] text-purplePizzazz">
                  {location}
                </span>
              </div>
              <div
                className="flex items-center gap-2 border-[1px] border-solid
              rounded-[16px] border-purplePizzazz px-3 py-2"
              >
                <Image src={clockIcon} alt="clock" width={20} height={20} />
                <span className="text-[12px] text-purplePizzazz">{time}</span>
              </div>
            </div>
            <div className="py-2">
              <p className="text-chineseBlack text-[26px] font-semibold">
                {description}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={calendarIcon}
                alt="calendar"
                className="pr-2 h-auto w-auto"
                width={20}
                height={20}
              />
              <p className="text-[16px] font-semibold text-purplePizzazz">
                {title}
              </p>
            </div>
            <div className="flex mt-2">
              <Image
                src={imageURL}
                alt={title}
                className="w-[500px] h-[300px] object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
