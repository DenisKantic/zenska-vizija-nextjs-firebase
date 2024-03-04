import Image, { StaticImageData } from "next/image";

interface EventCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  heading: string;
  locationIcon: string | StaticImageData;
  clockIcon: string | StaticImageData;
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
  description,
}) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
      <div className="bg-white shadow-md p-4 flex flex-col justify-between rounded-[16px]">
        <div>
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-[260px] object-cover mb-4 "
          />
        </div>
        <h3 className="text-[28px] font-semibold text-purplePizzazz">
          {title}
        </h3>
        <p className="text-chineseBlack text-[16px] font-semibold mb-4 pb-2">
          {heading}
        </p>
        <div className="flex text-[12px] font-medium text-quartz">
          <p>{description}</p>
        </div>
        <div className="font-medium text-[14px] pt-1 pb-3">
          <p className="text-purplePizzazz">Vidi više</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col pt-4">
            <div className="flex gap-2">
              <div>
                <Image src={locationIcon} alt="location" />
              </div>
              <span className="text-[12px] text-gray">
                Atelje Ismet Mujezinovic
              </span>
            </div>
            <div className=" flex gap-2 mt-2">
              <Image src={clockIcon} alt="clock" />
              <span className="text-[12px] text-gray">{time}</span>
            </div>
            <div className=" flex gap-2 mt-2 items-center">
              <div>
                <Image src={attenderIcon} alt="attender" />
              </div>
              <span className="text-[12px] text-gray">{attenders}</span>
            </div>
          </div>
          <div className="mt-4 pt-10 pl-4">
            <button className="bg-purplePizzazz text-white w-[160px] h-10 px-4 py-2 rounded-[16px]">
              Pridruži se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
