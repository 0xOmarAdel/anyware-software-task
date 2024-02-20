import Avatar from "../ui/Avatar";
import SearchInput from "../ui/SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-10 flex flex-row justify-between">
      <span className="text-3xl text-gray-500 font-semibold">
        Welcome Talia,
      </span>
      <div className="flex flex-row items-center gap-10">
        <SearchInput />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
