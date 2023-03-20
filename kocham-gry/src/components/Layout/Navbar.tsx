import { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const links = [
    ["Strona główna", "/"],
    ["Posty", "/posts"],
    ["Kontakt", "/contact"],
  ];

  return (
    <header className="py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-6 lg:space-x-9">
              {links.map(([text, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-medium text-lg hover:text-secondary transition"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            className="md:hidden mr-2"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <AiOutlineMenu size={30} className="hover:opacity-75 transition" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-8">
            {links.map(([text, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-base font-medium text-center hover:text-secondary transition"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
