import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden sm:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="searchbar" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none "
        />
      </div>
      <div>
        <ThemeToggle />
      </div>
      {/* ICONS AND PROFILE*/}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer">
          <Link href="/list/messages">
            <Image src="/message.png" alt="message" width={20} height={20} />
          </Link>
        </div>
        <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer relative">
          <Link href="/list/announcements">
            <Image
              src="/announcement.png"
              alt="announcement"
              width={20}
              height={20}
            />
          </Link>
          <div className="flex justify-center items-center absolute -top-2 -right-2 w-4 h-4 bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">User Name</span>
          <span className="text-[10px] text-gray-500 text-right">
            User Title
          </span>
        </div>
        <div className="">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
