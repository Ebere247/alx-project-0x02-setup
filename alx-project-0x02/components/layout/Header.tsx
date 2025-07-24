import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="bg-[#34967C] text-white text-sm py-2 text-center">
        Planning a trip? Stay updated on the latest travel guides!
      </div>

      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">ALX Listing App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
