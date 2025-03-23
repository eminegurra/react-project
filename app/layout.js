"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-6xl mx-auto mt-6">{children}</main>
      </body>
    </html>
  );
}
