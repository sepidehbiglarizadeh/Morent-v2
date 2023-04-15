import DoubleUser from "@/common/icons/DoubleUser";
import GasStation from "@/common/icons/GasStation";
import PointIcon from "@/common/icons/PointIcon";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Card = ({ car }) => {
  return (
    <div className="bg-white p-4 rounded-[10px] col-span-6 sm:col-span-3 md:col-span-2 flex flex-col justify-between ">
      {/* card Header */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="font-semibold">{car.title}</h2>
        <button>
          <HeartIcon className="w-4 h-4 stroke-secondary-300" />
        </button>
      </div>
      <span className="block text-xs font-medium text-secondary-300 mb-3 md:mb-[52px]">
        {car.cType.title}
      </span>

      {/* card image and icons */}
      <div className="flex justify-between md:flex-col md:gap-y-[52px] mb-8">
        <figure className="px-9 md:px-0 flex items-end justify-center relative">
          <Image
            src={car.coverImage}
            sizes="(max-width: 768px) 100vw, 50vw "
            blurDataURL={car.coverImage}
            width={272}
            height={84}
            alt={car.title}
          />
          <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-white to-transparent"></div>
        </figure>

        <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-x-1">
            <GasStation />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.gasoline}L
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <PointIcon />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.steering}
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <DoubleUser />
            <span className="text-xs xl:text-sm font-medium text-secondary-300">
              {car.capacity} People
            </span>
          </div>
        </div>
      </div>

      {/* card price and button */}
      <div className="flex justify-between items-center">
        <div>
          {car.discount.$numberDecimal !== "0" && (
            <div className="text-base xl:text-xl font-semibold xl:font-bold">
              ${car.discount.$numberDecimal}{" "}
              <span
                className={`${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                /
              </span>
              <span
                className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300${
                  car.discount.$numberDecimal !== "0" ? "" : "hidden"
                }`}
              >
                day
              </span>
            </div>
          )}
          <div
            className={` ${
              car.discount.$numberDecimal !== "0"
                ? "line-through text-secondary-300 text-sm font-medium"
                : "text-base xl:text-xl font-semibold xl:font-bold"
            }`}
          >
            ${car.price.$numberDecimal}{" "}
            <span
              className={`${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              /
            </span>
            <span
              className={`ml-1 text-xs xl:text-sm font-semibold xl:font-bold text-secondary-300 ${
                car.discount.$numberDecimal !== "0" ? "hidden" : ""
              }`}
            >
              day
            </span>
          </div>
        </div>
        <Link href={`/cars/${car.hashId}/${car.slug}`}>
          <button
            variant="contained"
            className="bg-primary-500 w-[100px] h-9 xl:w-[116px] rounded xl:h-11 capitalize hover:bg-primary-600 text-xs text-white xl:text-base font-semibold"
          >
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
