"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavToggle from "./NavToggle";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <NavToggle isOpen={isOpen} onClick={handleNavToggle} />

      <nav
        className={`${
          isOpen
            ? "fixed w-full mx-auto sm:max-w-60"
            : "fixed -translate-x-full"
        }  lg:static lg:block lg:border-r shadow-2xl lg:shadow-none shadow-primary-950 lg:border-primary-900 bg-primary-950 h-full top-0 left-0 px-5 lg:px-0 pt-28 lg:pt-0 z-10 transition-all duration-300 lg:translate-x-0 `}
      >
        <ul className=" flex flex-col items-center sm:items-start gap-2 h-full text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex  gap-4 font-semibold text-primary-200 ${
                  pathname === link.href ? "bg-primary-900" : ""
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavigation;
