"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center 
                       bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 
                       dark:via-gray-800 dark:to-gray-900 transition-colors">
      
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold wave-hover">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Hi, I'm Vishwas Raj Batham 👋
      </span>
    </h1>



      {/* Subtitle */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Business Analyst at EXL Analytics • Full-Stack Developer • Problem Solver
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="/Vishwas_Raj_Batham.pdf"
          target="_blank"
          className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow 
                     hover:bg-blue-700 transition"
        >
          📄 Resume
        </a>
        <a
          href="https://linkedin.com/in/vishwas-raj-batham-58b3701a4"
          target="_blank"
          className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium shadow 
                     hover:bg-gray-700 transition"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/vishwasrajbatham"
          target="_blank"
          className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium shadow 
                     hover:bg-gray-600 transition"
        >
          💻 GitHub
        </a>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-8 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl shadow"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </section>
  );
}
