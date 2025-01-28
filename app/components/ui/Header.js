"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-2xl">AppNextJS</h1>
        </Link>
        <nav className="flex justify-betwwen gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${
                pathname === link.href ? "font-bold" : ""
              } text-white text slate-100 p-3`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
