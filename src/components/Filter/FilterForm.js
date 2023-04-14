import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const options = [
  { value: "berin", label: "Berin" },
  { value: "munich", label: "Munich" },
  { value: "frankfurt", label: "frankfurt" },
];

const times = [];
for (let i = 0; i < 24; i++) {
  const hour = i.toString().padStart(2, "0");
  for (let j = 0; j < 60; j += 30) {
    const minute = j.toString().padStart(2, "0");
    const time = `${hour}:${minute}`;
    times.push({ value: time });
  }
}

const FilterForm = ({ title, bgColor, date, handleDateChange }) => {
  return (
    <div className="bg-white p-4 md:py-6 md:px-12 rounded-[10px] flex-1">
      <div className="flex items-center gap-x-2 mb-6">
        <span
          className={`${bgColor} bg-opacity-[30%]  rounded-full w-4 h-4 flex items-center justify-center`}
        >
          <span
            className={`w-2 h-2 rounded-full ${bgColor} inline-block`}
          ></span>
        </span>
        <h2 className="text-base text-secondary-500 font-semibold">{title}</h2>
      </div>

      <div className="flex items-center justify-between ">
        {/* location picker */}
        <div className="pr-5 w-full">
          <label className="block font-bold mb-2">Location</label>
          <div className="flex items-center">
            <select className=" w-full text-xs appearance-none outline-none cursor-pointer text-secondary-300 font-medium">
              <option value="" disabled>
                Select your city
              </option>
              {options.map((item) => (
                <option>{item.label}</option>
              ))}
            </select>
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>

        {/* Date picker */}
        <div className="px-5 w-full border-r border-l">
          <label className="block font-bold mb-2">Date</label>
          <div className="flex items-center">
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              dateFormat="d MMMM yyyy"
              placeholderText="Select your date"
              className="w-full text-xs outline-none cursor-pointer text-secondary-300 font-medium"
            />
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>

        {/* Time picker */}
        <div className="pl-5 w-full">
          <label className="block font-bold mb-2">Time</label>
          <div className="flex items-center">
            <select className=" w-full text-xs appearance-none outline-none cursor-pointer text-secondary-300 font-medium">
              <option value="" disabled>
                Select your time
              </option>
              {times.map((time) => (
                <option>{time.value}</option>
              ))}
            </select>
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
