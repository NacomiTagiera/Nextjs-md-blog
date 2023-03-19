import Link from "next/link";

import { GiConsoleController } from "react-icons/gi";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center text-4xl md:text-5xl font-bold py-5"
    >
      <GiConsoleController size={50} className="mr-2" />
      <h1 className="hidden sm:block">
        <span className="text-secondary">KOCHAM </span>
        GRY
      </h1>
    </Link>
  );
}
