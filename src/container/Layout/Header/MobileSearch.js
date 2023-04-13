import FilterIcon from "@/common/icons/FilterIcon";
import SearchIcon from "@/common/icons/SearchIcon";

const MobileSearch = () => {
  return (
    <div className="flex items-center justify-between gap-x-4 md:hidden">
      <form className="flex items-center justify-between gap-x-2 flex-1 border rounded-[10px] py-3 px-6 ">
        <SearchIcon />
        <input
          type="text"
          className="outline-none border-none w-full text-secondary-400 font-medium text-sm"
          placeholder="Search something here"
        />
      </form>
      <button className="p-3 border rounded-[10px]">
        <FilterIcon />
      </button>
    </div>
  );
};

export default MobileSearch;
