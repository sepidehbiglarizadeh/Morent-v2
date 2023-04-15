import DoubleArrow from "@/common/icons/DoubleArrow";
import FilterForm from "./FilterForm";
import Link from "next/link";
import { useState } from "react";

const Filter = () => {
  const [pickUptDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());

  function handlePickupDateChange(date) {
    setPickUpDate(date);
  }

  function handleDropoffDateChange(date) {
    setDropOffDate(date);
  }

  return (
    <section className=" ">
      <div className="mb-8 md:mb-9 flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-11 lg:gap-y-0 relative container mx-auto max-w-[1440px]">
        <FilterForm
          title="Pick-Up"
          bgColor="bg-primary-500"
          date={pickUptDate}
          handleDateChange={handlePickupDateChange}
        />
        <Link
          href="/cars"
          className="self-center bg-primary-500 w-[60px] h-[60px] hover:bg-primary-600 rounded-[10px] flex items-center justify-center absolute top-[125px] lg:static "
        >
          <DoubleArrow />
        </Link>
        <FilterForm
          title="Drop-Off"
          bgColor="bg-information-500"
          date={dropOffDate}
          handleDateChange={handleDropoffDateChange}
        />
      </div>
    </section>
  );
};

export default Filter;
