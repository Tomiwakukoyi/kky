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
      {/* mobile */}
      <div className=" md:hidden">
        <div className="flex items-center text-white justify-between w-screen px-9 pt-4">
          <p className="flex flex-col text-center font-serif">
            Tomiwa <span>Kukoyi</span>
          </p>
          <MenuIcon
            fontSize="large"
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0  bg-black flex text-white h-screen w-screen transition-transform duration-300 md:hidden`}
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

      {/* Desktop Nav */}

      <div className="hidden md:flex items-center text-white justify-between px-52 pt-5 w-screen">
        <p className="flex flex-col text-center font-serif text-lg">
          Tomiwa <span>Kukoyi</span>
        </p>
        <div className=" flex items-center gap-10">
          <nav className=" flex items-center text-md space-x-3">
            <span className=" cursor-pointer">About</span>
            <span className=" cursor-pointer">Work Experience</span>
            <span className=" cursor-pointer">Contact</span>
          </nav>
          <button className=" bg-green-400 h-12 w-28 hover:bg-transparent hover:border hover:border-green-400 rounded-full">
            My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
