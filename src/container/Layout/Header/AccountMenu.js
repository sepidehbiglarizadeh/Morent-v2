import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AccountMenu = ({ anchorEl, accountMenuHandler }) => {
  return (
    <div
      className={`${
        anchorEl ? "block" : "hidden"
      } absolute right-0 top-14 bg-white w-36 text-secondary-400 p-4 shadow-md rounded menu`}
    >
      <div className="mb-4" onClick={accountMenuHandler}>
        <Link href="/signin" className="flex gap-x-2">
          <ArrowRightOnRectangleIcon className="w-6 h-6" />
          <span>Sign-in</span>
        </Link>
      </div>
      <div onClick={accountMenuHandler}>
        <Link href="/signup" className="flex gap-x-2">
          <UserPlusIcon className="w-6 h-6" />
          <span>Sign-up</span>
        </Link>
      </div>
    </div>
  );
};

export default AccountMenu;
