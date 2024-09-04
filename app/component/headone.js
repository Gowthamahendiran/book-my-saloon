"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl">Book My Saloon</h1>
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 md:top-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none md:space-x-6`}
        >
          <Link href="/" className="block md:inline hover:text-yellow-500 mb-2 md:mb-0">
            Home
          </Link>
          <Link href="/" className="block md:inline hover:text-yellow-500 mb-2 md:mb-0">
            About us
          </Link>
          <Link href="/" className="block md:inline hover:text-yellow-500 mb-2 md:mb-0">
            Saloon Tour
          </Link>
          <Link href="/" className="block md:inline hover:text-yellow-500 mb-2 md:mb-0">
            Help
          </Link>
          <button className="block md:inline w-full md:w-auto bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out mt-4 md:mt-0">
            Signin
          </button>
        </nav>
      </div>
    </header>
  );
}
