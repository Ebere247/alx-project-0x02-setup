import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string): boolean => router.pathname === path;

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="bg-[#34967C] text-white text-sm py-2 text-center">
        Planning a trip? Stay updated on the latest travel guides!
      </div>

      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">ALX Listing App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/home"
              className={
                isActive("/home")
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:underline"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:underline"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={
                isActive("/posts")
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:underline"
              }
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
