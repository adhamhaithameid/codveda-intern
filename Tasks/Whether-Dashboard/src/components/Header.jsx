import { LuMoon } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className="w-screen bg-background">

    {/* Left group: notifications, Dark mode toggle, location */}
      <div className="flex absolute top-0 left-0">
        <button className="relative w-[3rem] h-[3rem] bg-button_dark m-5 rounded-full items-center justify-center flex">
          <IoMdNotificationsOutline className="text-2xl text-white" />
        </button>
        <button className="relative w-[3rem] h-[3rem] bg-button_dark m-5 -ml-1 rounded-full items-center justify-center flex">
          <LuMoon className="text-2xl text-white" />
        </button>
        <button className="relative min-w-3 h-[3rem] bg-button_dark m-5 -ml-1 rounded-full items-center p-3 place-content-evenly gap-2 justify-center flex">
          <FiMapPin className="text-1xl text-white" />
          <span className="text-lg text-white">Cairo, Egypt</span>
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex absolute top-0 right-0">
        <div className="relative w-[32rem] h-[3rem] focus-within:outline-1 focus-within:outline focus-within:outline-white bg-button_dark mt-5 mr-96 rounded-full items-center justify-left flex p-3 gap-3 ease-in-out duration-100">
          <IoSearch className="text-2xl text-white" />
          <input
            type="text"
            placeholder="Search City"
            className="flex-1 bg-transparent outline-none text-base placeholder-secondary_text text-secondary_text"
          />
        </div>
      </div>

      {/* Right group: user avatar */}
      <div className="flex absolute top-0 right-0">
          <button className="relative w-[3rem] h-[3rem] bg-button_dark m-5 rounded-full items-center justify-center flex ">
            <FaUser className="text-2xl text-white " />
          </button>
      </div>
    </div>
  );
}

export default Header;
