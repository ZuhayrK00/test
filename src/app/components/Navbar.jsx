import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillWallet } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { FaGem } from "react-icons/fa";
import { SiLightning } from "react-icons/si";

const Navbar = () => {
  return (
    <nav>
      {/* Navbar container with background gradient */}
      <div
        className="navbar flex justify-between items-center"
        style={{ background: "linear-gradient(135deg, #6b30f5, #a451ff)" }}
      >
        {/* Left side of the Navbar */}
        <div className="flex items-center">
          {/* Logo */}
          <a className="btn btn-ghost normal-case text-xl">CUBE</a>

          {/* Menu items (hidden on screens smaller than md) */}
          <div className="hidden md:flex space-x-8 ml-4 menu-items-container md:space-x-8">
            {/* Home */}
            <button className="menu-title flex items-center text-white hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-md px-4 py-2 hide-at-950px">
              <AiFillHome className="icon text-lg" />
              <span className="ml-2">HOME</span>
            </button>

            {/* Challenges */}
            <button className="menu-title flex items-center text-white hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-md px-4 py-2 hide-at-950px">
              <TbTargetArrow className="icon text-lg" />
              <span className="ml-2">CHALLENGES</span>
            </button>

            {/* Collectibles */}
            <button className="menu-title flex items-center text-white hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-md px-4 py-2 hide-at-950px">
              <FaGem className="icon text-lg" />
              <span className="ml-2">COLLECTIBLES</span>
            </button>

            {/* Wallet */}
            <button className="menu-title flex items-center text-white hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-md px-4 py-2 hide-at-950px">
              <AiFillWallet className="icon text-lg" />
              <span className="ml-2">WALLET</span>
            </button>
          </div>
        </div>

        {/* Right side of the Navbar */}
        <div className="flex">

          {/* Label: XP Level */}
          <div className=" flex items-center px-4 py-2 bg-white text-black rounded-xl text-xs mr-4">
            <SiLightning className="icon text-2xl" />
            <span className="ml-2">XP 0 | Level 0</span>
          </div>

          {/* Avater */}
          <div className="hidden sm:block">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img className="bg-black" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
