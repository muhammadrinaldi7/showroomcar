"use client";
import { faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { name: "Home", href: "#Home" },
    { name: "Mobil", href: "#ListMobil" },
    { name: "About", href: "#About" },
    { name: "Contact", href: "#Contact" },
  ];
  return (
    <header className="w-full bg-gray-300/30 sticky top-0 z-30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className=" flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/AUMMOTR.ico"
              alt="Logo"
              width={1000}
              height={1000}
              className="h-10 w-10 rounded-full"
            />
          </a>
          <h1 className="text-3xl hidden md:block text-aum font-bold">
            ANUGERAH UTAMA MOTOR
          </h1>
        </div>
        <nav aria-label="Global " className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  className="text-gray-600 transition hover:text-gray-600/75"
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://maps.app.goo.gl/g6NAbdBdNJLBRnDQ9"
          target="_blank"
          className="hidden md:block"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
        </a>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-sm bg-white p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
        {isOpen && (
          <div className="absolute right-0 top-16 z-10 w-full bg-gray-300/60 shadow-lg md:hidden">
            <nav className={`flex flex-col items-center `}>
              <ul className="flex flex-col items-center gap-4 p-4 text-sm">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link
                      className="text-black transition hover:text-black/75"
                      href={menu.href}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        {/* <div className="absolute right-0 top-16 z-10 w-full bg-white shadow-lg md:hidden">
          <nav className={`flex flex-col items-center `}>
            <ul className="flex flex-col items-center gap-4 p-4 text-sm">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    className="text-gray-600 transition hover:text-gray-600/75"
                    href={menu.href}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div> */}
      </div>
    </header>
  );
}
