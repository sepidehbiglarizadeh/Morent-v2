import Link from "next/link";
import MobileSearch from "./MobileSearch";
import DesktopSearch from "./DesktopSearch";
import {
  BellIcon,
  Cog6ToothIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import AccountMenu from "./AccountMenu";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ http }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const accountMenuRef = useRef();
  const { user } = useSelector((state) => state.userSignin);
  const [searchValue, setSearchValue] = useState("");
  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target)
      ) {
        setAnchorEl(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const { data: carsData } = await http.get("/cars?limit=100");
        setAllCars(carsData.data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCars();
  }, []);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      const filteredCars = allCars.filter((car) =>
        car.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCars(filteredCars);
    } else {
      setCars([]);
    }
  }, [searchValue]);

  const accountMenuHandler = () => {
    setAnchorEl((prevState) => !prevState);
  };

  return (
    <header className="py-8 px-6 md:py-10 lg:px-16 bg-white ">
      <div className="mb-8 md:mb-0 flex justify-between items-center container mx-auto max-w-[1440px]">
        <div className="flex items-center gap-x-4 xl:gap-x-[78px] w-full">
          <Link
            href="/"
            className="text-primary-500 text-2xl md:text-[32px] font-bold uppercase"
          >
            Morent
          </Link>
          <DesktopSearch
            changeHandler={changeHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            cars={cars}
          />
        </div>
        <div className="flex items-center gap-x-5">
          <Link
            href={user ? "/favourites" : "/signin"}
            className="p-[10px] border rounded-full hidden md:block"
          >
            <HeartIcon className="w-6 h-6 fill-secondary-400" />
          </Link>
          <button className="p-[10px] border rounded-full hidden md:block">
            <BellIcon className="w-6 h-6 fill-secondary-400" />
          </button>
          <div className="relative" ref={accountMenuRef}>
            <button
              className="p-[10px] border rounded-full hidden md:block"
              onClick={accountMenuHandler}
            >
              <Cog6ToothIcon className="w-6 h-6 fill-secondary-400" />
            </button>
            <AccountMenu
              anchorEl={anchorEl}
              accountMenuHandler={accountMenuHandler}
              http={http}
            />
          </div>
          <Link href="/dashboard" className="p-[10px] border rounded-full">
            <UserIcon className="w-6 h-6 fill-secondary-400" />
          </Link>
        </div>
      </div>
      <MobileSearch
        changeHandler={changeHandler}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        cars={cars}
      />
    </header>
  );
};

export default Header;
