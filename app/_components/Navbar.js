"use client";
import { useState } from "react";
import Logo from "./Logo";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <Logo />

      <div className="flex lg:space-x-4 justify-between items-center">
        {/* Search bar */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-600" />
          <input
            type="text"
            placeholder="Search essentials, groceries and more"
            className="pl-10 pr-4 py-0 lg:py-2 w-full lg:w-[500px] border bg-cyan-50 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="hidden lg:flex flex-col space-y-4 mt-4 lg:mt-0 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <p className="flex items-center">
            <UserIcon className="h-7 w-7 text-cyan-600" />
            <span>Sign in/Sign up</span>
          </p>
          <p>|</p>
          <p className="flex items-center">
            <ShoppingCartIcon className="h-7 w-7 text-cyan-600" />
            <span>Cart</span>
          </p>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8 text-cyan-600" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-cyan-600" />
            )}
          </button>
        </div>
      </div>

      {/* Menu items */}
      {menuOpen && (
        <div className="flex justify-end space-x-2 mt-0 lg:mt-0 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <p className="flex items-center">
            <UserIcon className="h-4 w-4 text-cyan-600" />
            <span>Sign in/Sign up</span>
          </p>
          <p>|</p>
          <p className="flex items-center">
            <ShoppingCartIcon className="h-4 w-4 text-cyan-600" />
            <span>Cart</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
