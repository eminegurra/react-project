"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatWidget from "./components/ChatWidget"; // ✅ make sure the path is correct
import "./globals.css";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-all`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-6xl mx-auto mt-6">{children}</main>

        <ChatWidget /> {/* ✅ Chat appears on all pages now */}
      </body>
    </html>
  );
}
