"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ darkMode, setDarkMode }) {
  
  const handleToggle = () => {
    console.log("🖱️ onClick - Dark mode toggled");
    setDarkMode(!darkMode);
  };

  return (
    <nav
      onMouseEnter={() => console.log("🖱️ onMouseEnter - Navbar hovered")}
      onMouseLeave={() => console.log("🖱️ onMouseLeave - Navbar unhovered")}
      className={`py-4 px-6 shadow-md flex justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-200 text-white"
      } transition-all`}
    >
      <Link href="/" className="text-2xl font-bold">MyApp</Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/playground" className="hover:underline">Playground</Link>

        <span onClick={handleToggle} className="cursor-pointer text-2xl">
          {darkMode ? "☀️" : "🌙"}
        </span>
      </div>
    </nav>
  );
}
