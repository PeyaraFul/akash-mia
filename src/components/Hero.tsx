"use client";

import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-950 dark:via-black dark:to-gray-950 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Available For Freelance Work
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I&apos;m
              <span className="text-blue-600 dark:text-blue-400"> Akash Mia</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              MERN Stack Developer
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build modern, scalable, and high-performance web applications with
              React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. Passionate
              about creating engaging user experiences and solving real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-600/25"
              >
                Hire Me
              </a>
              <a
                href="/MERN-Stack_developer_akashMia.pdf"
                download
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <FiDownload size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative p-[5px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/30">
              <div className="relative w-96 h-96 sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden bg-white dark:bg-black">
                <Image
                  src="/akash.png"
                  alt="Akash Mia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
