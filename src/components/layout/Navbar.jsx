import { Logo } from "./../../common/Images";
import { MenuIcon, LikeIcon, ProfileIcon, BegIcon } from "./../../common/Icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#ffffff] px-7 md:px-14 py-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-6 w-32 md:w-72">
        <MenuIcon className="cursor-pointer hover:opacity-60" />
        <ul className="hidden md:flex gap-8 text-base font-medium text-black">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">Collections</li>
          <li className="cursor-pointer hover:opacity-70">New</li>
        </ul>
      </div>

      {/* Center Play Button */}
      <Link
        to={"/"}
        className="flex items-center justify-center cursor-pointer"
      >
        <Logo />
      </Link>

      {/* Right Section */}
      <div className="flex justify-end md:items-center md:gap-8 gap-1 w-32 md:w-72">
        <Link
          to={"/like"}
          className="w-12 h-12 hidden md:flex items-center justify-center bg-black rounded-full cursor-pointer"
        >
          <LikeIcon className={"rotate-45 mb-1"} />
        </Link>

        {/* Cart Button */}
        <Link to={"/cart"} className="relative md:mr-10 ">
          <div className="cursor-pointer md:block hidden bg-black text-white px-6 py-3 rounded-full text-base font-medium">
            Cart
          </div>
          <div className="md:absolute -right-10 bg-black top-0 w-12 h-12 flex items-center justify-center cursor-pointer rounded-full ">
            <div className="w-8 h-8 bg-white rounded-full  flex items-center justify-center ">
              <BegIcon className={"w-7 h-7"} />
            </div>
          </div>
        </Link>

        <div className="w-12 h-12  flex items-center justify-center bg-black rounded-full cursor-pointer">
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
