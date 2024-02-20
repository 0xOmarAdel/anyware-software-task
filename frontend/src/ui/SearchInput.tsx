import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="relative">
      <FaSearch className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />
      <input
        className="w-64 py-[5px] pl-11 bg-transparent border border-gray-300 rounded-2xl text-gray-500 focus-visible:outline-none placeholder:font-medium"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
