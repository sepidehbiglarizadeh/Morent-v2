import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import {
  ArrowLeftOnRectangleIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

const AccountMenu = ({ anchorEl, accountMenuHandler, http }) => {
  const { user } = useSelector((state) => state.userSignin);
  
  const logoutUserHandler = () => {
    http
      .get("/user/logout")
      .then((res) => {
        window.location.href = "/";
      })
      .catch();
  };

  return (
    <div
      className={`${
        anchorEl ? "block" : "hidden"
      } absolute right-0 top-14 bg-white w-36 text-secondary-400 p-4 shadow-md rounded menu z-20`}
    >
      {user._id ? (
        <>
          <div className="mb-4" onClick={accountMenuHandler}>
            <Link href="/dashboard" className="flex gap-x-2">
              <UserIcon className="w-6 h-6" />
              <span>Profile</span>
            </Link>
          </div>
          <hr />
          <div className="mt-4">
            <button className="flex gap-x-2" onClick={logoutUserHandler}>
              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              <span>log-out</span>
            </button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default AccountMenu;
