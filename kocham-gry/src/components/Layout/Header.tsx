import { GiConsoleController } from "react-icons/gi";

export default function Header() {
  return (
    <header className="flex flex-row justify-center text-light text-4xl md:text-5xl font-bold py-5">
      <GiConsoleController size={50} className="mr-2" />
      <h1>
        <span className="text-secondary">KOCHAM </span>
        GRY
      </h1>
    </header>
  );
}
