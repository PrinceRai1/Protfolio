import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { BiAlignRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

/* Navbar component*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle navbar
   *
   * This function toggles the isOpen state when the mobile menu button is clicked.
   */
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full sticky -top-0 p-4 z-30 shadow-xl bg-gradient-to-r from-[#efe353]  via-[#ff4d5a] to-[#987459]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-[#4c5064] text-2xl font-bold text-center mt-1">
            Prince.dev
          </h1>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-[#2d2e32] hover:text-blue-600">
              {isOpen ? <RxCross2 /> : <BiAlignRight/>}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="#" className="text-[#2d2e32] hover:text-blue-600">
              Home
            </Link>
            <Link
              to="#about"
              className="text-[#2d2e32] hover:text-blue-600 active:text-blue-600">
              About
            </Link>
            <Link to="#project" className="text-[#2d2e32] hover:text-blue-600">
              Projects
            </Link>
            <Link to="#contact" className="text-[#2d2e32] hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden float-right box-border border border-slate-900 rounded-xl p-6 bg-[#efe353] w-full h-full">
            <Link
              to="#"
              className="block text-[#2d2e32] hover:text-blue-600 mb-1">
              Home
              <hr className="bg-slate-900 w-full" />
            </Link>
            <Link
              to="#about"
              className="block text-[#2d2e32] hover:text-blue-600 mb-1">
              About
            </Link>
            <hr className="bg-slate-900" />
            <Link
              to="#project"
              className="block text-[#2d2e32] hover:text-blue-600 mb-1">
              Projects
            </Link>
            <hr className="bg-slate-900" />
            <Link
              to="#contact"
              className="block text-[#2d2e32] hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
