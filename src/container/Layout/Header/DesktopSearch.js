import FilterIcon from "@/common/icons/FilterIcon";
import SearchIcon from "@/common/icons/SearchIcon";

const DesktopSearch = () => {
  return (
      <form className="hidden md:flex items-center justify-between gap-x-5 flex-1 border rounded-[70px] py-[10px] px-5 max-w-[492px]">
        <SearchIcon />
        <input
          type="text"
          className="outline-none border-none w-full text-secondary-400 font-medium text-sm"
          placeholder="Search something here"
        />
        <FilterIcon />
      </form>
  );
};

export default DesktopSearch;
