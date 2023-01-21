import { Controller } from "react-bootstrap-icons";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <h1 className="fw-bold py-3 text-center text-white text-uppercase main-header">
        <Controller className="controller" />
        <span> kocham </span>
        gry
      </h1>
    </header>
  );
}
