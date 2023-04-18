import FilterIcon from "@/common/icons/FilterIcon";
import SearchIcon from "@/common/icons/SearchIcon";
import SearchBox from "./SearchBox";

const MobileSearch = ({ changeHandler, searchValue, setSearchValue, cars }) => {
  return (
    <div className="flex items-center justify-between gap-x-4 md:hidden">
      <div className="relative">
        <form className="flex items-center justify-between gap-x-2 flex-1 border rounded-[10px] py-3 px-6 ">
          <SearchIcon />
          <input
            type="text"
            className="outline-none border-none focus:ring-0 p-0 w-full text-secondary-400 font-medium text-sm"
            placeholder="Search something here"
            value={searchValue}
            onChange={changeHandler}
          />
        </form>
        <SearchBox
          cars={cars}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <button className="p-3 border rounded-[10px]">
        <FilterIcon />
      </button>
    </div>
  );
};

export default MobileSearch;
