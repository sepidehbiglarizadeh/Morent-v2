import Image from "next/image";
import Link from "next/link";

const SearchBox = ({ cars, searchValue, setSearchValue }) => {
  return (
    <div
      className={`bg-white absolute right-0 left-0 p-3 rounded-b-[10px] shadow-sm border-b border-x max-h-96 overflow-auto ${
        searchValue ? "block" : "hidden"
      }`}
    >
      {cars.length ? (
        cars.map((car) => {
          return (
            <div className="border-b p-1" key={car._id}>
              <Link
                href={`/cars/${car.hashId}/${car.slug}`}
                onClick={() => setSearchValue("")}
                className="flex items-center justify-between w-full"
              >
                <span className="text-sm md:text-base">{car.title}</span>
                <div className="background relative w-14 h-14 flex justify-center items-center rounded">
                  <Image
                    src={car.coverImage}
                    width={50}
                    height={50}
                    alt={car.title}
                  />
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <p className="text-sm">No car found !!</p>
      )}
    </div>
  );
};

export default SearchBox;
