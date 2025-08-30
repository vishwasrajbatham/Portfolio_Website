"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center sticky top-0 z-50 shadow">
      <h1 className="font-bold text-xl">Vishwas Raj Batham</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-3 md:hidden">
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#experience" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
