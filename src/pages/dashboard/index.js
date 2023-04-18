import http from "@/services/httpService";
import {
  ArrowLeftOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProfilePage = () => {
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
    <>
      <Head>
        <title>MORENT | Dashboard</title>
      </Head>
      <div className="container mx-auto max-w-[700px] min-h-[50vh] px-4 md:px-[60px] mt-4 mb-4 flex items-start gap-x-4 ">
        <section className="bg-white rounded-[10px] max-w-max">
          <ul>
            <li className="cursor-pointer p-4 border-b">
              <Link href="/dashboard" className="flex items-center gap-x-1 ">
                <UserIcon className="w-6 h-6 stroke-primary-500" />
                <span className="hidden md:block">Dashboard</span>
              </Link>
            </li>
            <li className="cursor-pointer p-4 border-b">
              <Link
                href="/dashboard/order"
                className="flex items-center gap-x-1 "
              >
                <ArrowPathRoundedSquareIcon className="w-6 h-6 stroke-primary-500" />
                <span className="hidden md:block">Orders</span>
              </Link>
            </li>
            <li
              className="flex items-center gap-x-1 cursor-pointer p-4"
              onClick={logoutUserHandler}
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6 stroke-rose-500" />
              <span className="hidden md:block">Sign-out</span>
            </li>
          </ul>
        </section>
        <section className="bg-white rounded-[10px] flex-1 p-4">
          {user && (
            <>
              <div className="py-2">
                <span className="block font-bold">Name :</span>
                <span className="block">{user.name}</span>
              </div>
              <div className="py-2">
                <span className="block font-bold">Email :</span>
                <span className="block">{user.email}</span>
              </div>
              <div className="py-2">
                <span className="block font-bold">Phone Number :</span>
                <span className="block">{user.phoneNumber}</span>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
