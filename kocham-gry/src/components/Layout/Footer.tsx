import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-light">
      <div className="flex justify-center bg-warning py-5">
        <a
          href="https://github.com/NacomiTagiera"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <AiOutlineGithub size={50} />
        </a>
        <a
          href="https://www.facebook.com/kubapawlak123321/"
          target="_blank"
          className="mx-5 hover:opacity-80 transition"
        >
          <AiFillFacebook size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-pawlak-frontend-dev/"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <AiFillLinkedin size={50} />
        </a>
      </div>
      <p className="bg-secondary font-semibold px-3 py-4 text-center text-lg md:text-xl">
        Jakub Pawlak - przyszły frontend developer &copy; Wszelkie prawa
        zastrzeżone
      </p>
    </footer>
  );
}
