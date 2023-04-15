import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const capacity = [
  { id: 1, title: "2 Person", value: 2 },
  { id: 2, title: "4 Person", value: 4 },
  { id: 3, title: "6 Person", value: 6 },
  { id: 4, title: "8 Or More", value: 8 },
];

const Category = ({ allCras, carTypes }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    typeId: [],
    capacity: [],
    price: 0,
  });

  useEffect(() => {
    router.query.typeId = filters.typeId;
    router.query.capacity = filters.capacity;
    if (filters.price != 0) {
      router.query.price = filters.price;
    } else {
      delete router.query.price; // Remove the "price" property from router.query
    }
    routerPush(router);
  }, [filters]);

  const changeHandler = (e) => {
    const { name, value, checked } = e.target;
    if (name !== "price" && checked) {
      setFilters({ ...filters, [name]: [...filters[name], value] });
    } else if (name !== "price" && !checked) {
      setFilters({
        ...filters,
        [name]: filters[name].filter((item) => item !== value),
      });
    } else if (name === "price") {
      setFilters({ ...filters, [name]: value });
    }
  };

  const deleteFiltersHandler = () => {
    router.push(router.pathname);
  };

  return (
    <section className="bg-white md:w-56 xl:w-[300px] p-8 hidden md:block">
      <button
        className="text-primary-500 text-right w-full font-bold text-xs"
        onClick={deleteFiltersHandler}
      >
        Remove All
      </button>
      <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
        Type
      </h2>
      <ul className="mb-14">
        {carTypes.map((type) => {
          return (
            <li
              className="mb-6 text-xl font-semibold flex items-center gap-x-2"
              key={type._id}
            >
              <input
                id={type._id}
                type="checkbox"
                value={type._id}
                name="typeId"
                className="accent-primary-500 w-5 h-5 rounded"
                onChange={changeHandler}
              />
              <label
                htmlFor={type._id}
                className="cursor-pointer text-secondary-400 mr-1"
              >
                {type.title}
              </label>
              <span className="text-secondary-300">
                (
                {allCras.filter((car) => car.cType.title === type.title).length}
                )
              </span>
            </li>
          );
        })}
      </ul>
      <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
        Capacity
      </h2>
      <ul className="mb-14">
        {capacity.map((item) => {
          return (
            <li
              className="mb-6 text-xl font-semibold flex items-center gap-x-2"
              key={item.id}
            >
              <input
                type="checkbox"
                value={item.value}
                name="capacity"
                className="accent-primary-500 w-5 h-5 rounded"
                onChange={changeHandler}
              />
              <label
                htmlFor={item.id}
                className=" cursor-pointer text-secondary-400 mr-1"
              >
                {item.title}
              </label>
              <span className="text-secondary-300">
                ({allCras.filter((car) => car.capacity === item.value).length})
              </span>
            </li>
          );
        })}
      </ul>
      <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
        Price
      </h2>
      <input
        type="range"
        className="w-full"
        min="0"
        max="100"
        name="price"
        value={filters.price}
        onChange={changeHandler}
        step={10}
      />
      <span className="text-xl font-semibold text-secondary-400">
        Max ${filters.price}.00
      </span>
    </section>
  );
};

export default Category;
