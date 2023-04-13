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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const accountMenuRef = useRef();

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

  const accountMenuHandler = () => {
    setAnchorEl((prevState) => !prevState);
  };

  return (
    <header className="py-8 px-6 md:py-10 md:px-[60px] bg-white ">
      <div className="mb-8 md:mb-0 flex justify-between items-center container mx-auto max-w-[1440px]">
        <div className="flex items-center gap-x-[78px] w-full">
          <Link
            href="/"
            className="text-primary-500 text-2xl md:text-[32px] font-bold uppercase"
          >
            Morent
          </Link>
          <DesktopSearch />
        </div>
        <div className="flex items-center gap-x-5">
          <Link
            href="/favourites"
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
            />
          </div>
          <Link href="/dashboard" className="p-[10px] border rounded-full">
            <UserIcon className="w-6 h-6 fill-secondary-400" />
          </Link>
        </div>
      </div>
      <MobileSearch />
    </header>
  );
};

export default Header;