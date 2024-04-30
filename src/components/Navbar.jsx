import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex items-center text-white justify-between w-screen px-9 pt-4">
        <p className="flex flex-col text-center font-serif">
          Tomiwa <span>Kukoyi</span>
        </p>
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Nav */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0  bg-black flex text-white h-screen w-screen transition-transform duration-300`}
      >
        {isOpen && (
          <CloseIcon
            fontSize="large"
            className="cursor-pointer right-9 absolute top-4 "
            onClick={toggleMenu}
          />
        )}
        <nav className=" flex flex-col text-2xl items-center justify-center w-screen gap-3 ">
          <span className=" cursor-pointer">About</span>
          <span className=" cursor-pointer">Work Experience</span>
          <span className=" cursor-pointer">Contact</span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
