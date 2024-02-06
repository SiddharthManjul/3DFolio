"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "research",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="flex bg-slate-400">
        <ul className="hidden md:flex md:flex-col h-screen justify-center gap-y-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 md:mt-4 cursor-pointer capitalize text-4xl font-medium text-gray-500 hover:scale-105 hover:text-cyan-900 duration-200n link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-4 w-full z-10 text-gray-500 md:hidden"
        >
          {nav ? (
            <FaTimes size={30} className="animate-spin hover:rotate-90" />
          ) : (
            <FaBars size={30} />
          )}
        </div>

        {nav && (
          <div
            className={
              nav
                ? "flex flex-col justify-center items-left absolute top-0 left-0 ease-in duration-300 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                : "flex flex-col justify-center items-left absolute top-0 left-[-100%] ease-in duration-300 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
            }
          >
            <ul>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl hover:bg-gradient-to-r from-black to-gray-800 backdrop-blur-xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="bg-slate-100 w-full hidden md:block">
          <Link href="/">Siddharth Manjul</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
