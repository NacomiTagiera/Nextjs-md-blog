import { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Gamepad icon</span>
              <GiConsoleController
                size={35}
                className="text-light hover:opacity-80 transition"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-lg text-light hover:bg-warning"
              >
                Strona główna
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-lg text-light hover:bg-warning"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            className="sm:hidden mr-2"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <AiOutlineMenu
              size={30}
              className="text-light hover:opacity-75 transition"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block py-2 rounded-md text-base font-medium text-center text-light hover:underline"
            >
              Strona główna
            </Link>
            <Link
              href="/contact"
              className="block py-2 rounded-md text-base font-medium text-center text-light hover:underline"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
