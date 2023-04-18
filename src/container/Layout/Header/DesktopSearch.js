import FilterIcon from "@/common/icons/FilterIcon";
import SearchIcon from "@/common/icons/SearchIcon";
import SearchBox from "./SearchBox";

const DesktopSearch = ({
  changeHandler,
  searchValue,
  setSearchValue,
  cars,
}) => {
  return (
    <div
      className={`hidden md:block border flex-1 max-w-[492px] mr-2 relative ${
        searchValue ? "rounded-t-[10px]" : "rounded-[70px]"
      }`}
    >
      <div className="flex items-center gap-x-5 py-[10px] px-5 w-full">
        <SearchIcon />
        <input
          type="text"
          className="outline-none border-none p-0 focus:ring-0 w-full text-secondary-400 font-medium text-sm"
          placeholder="Search something here"
          value={searchValue}
          onChange={changeHandler}
        />
        <FilterIcon />
      </div>
      <SearchBox
        cars={cars}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default DesktopSearch;
