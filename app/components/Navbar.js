"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  return (
    <nav className={`py-4 px-6 shadow-md flex justify-between items-center ${darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"} transition-all`}>
      {/* App Name */}
      <Link href="/" className="text-2xl font-bold">
        MyApp
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About Us</Link>
        <Link href="/services" className="hover:underline">Services</Link>

        {/* Dark Mode Toggle Icon */}
        <span
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl hover:scale-110 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </span>
      </div>
    </nav>
  );
}
