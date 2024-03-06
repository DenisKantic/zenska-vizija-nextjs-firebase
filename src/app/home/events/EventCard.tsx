import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  heading: string;
  locationIcon: string | StaticImageData;
  clockIcon: string | StaticImageData;
  calendarIcon: string | StaticImageData;
  time: string;
  attenderIcon: string | StaticImageData;
  attenders: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  heading,
  locationIcon,
  clockIcon,
  time,
  attenderIcon,
  attenders,
  calendarIcon,
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
                  Atelje Ismet Mujezinovic
                </span>
              </div>
              <div
                className="flex items-center gap-2 border-[1px] border-solid
              rounded-[16px] border-purplePizzazz px-3 py-2"
              >
                <Image src={clockIcon} alt="clock" width={20} height={20} />
                <span className="text-[12px] text-purplePizzazz">{time}</span>
              </div>
              <div
                className="flex items-center gap-2 border-[1px] border-solid
              rounded-[16px] border-purplePizzazz px-3 py-2"
              >
                <Image
                  src={attenderIcon}
                  alt="attender"
                  width={20}
                  height={20}
                />
                <span className="text-[12px] text-purplePizzazz">
                  {attenders}
                </span>
              </div>
            </div>
            <div className="py-2">
              <p className="text-chineseBlack text-[26px] font-semibold">
                {heading}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={calendarIcon}
                alt="calendar"
                className="pr-2"
                width={20}
                height={20}
              />
              <p className="text-[16px] font-semibold text-purplePizzazz">
                {title}
              </p>
            </div>
            <div className="flex mt-2">
              <Image
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
