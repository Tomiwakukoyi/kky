import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex items-center text-white justify-between w-screen px-4 pt-3">
        <p className="flex flex-col text-center font-serif">
          Tomiwa <span>Kukoyi</span>
        </p>
        <MenuIcon fontSize="large" onClick={toggleMenu} />
      </div>

      {/* Mobile Nav */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 bg-black flex text-white h-screen w-screen transition-transform duration-300`}
      >
        {isOpen && <span className="absolute right-5" onClick={toggleMenu}>close</span>}
        <nav className=" flex flex-col items-center justify-center w-screen ">
          <span>About</span>
          <span>Work Experience</span>
          <span>Contact</span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* Overlay */
}
// {isOpen && (
//     <div
//       className="fixed top-0  left-0 w-screen h-screen bg-black opacity-50 z-10"
//       onClick={toggleMenu}
//     ></div>
//   )}
