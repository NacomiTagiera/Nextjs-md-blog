import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex justify-center py-2 text-secondary">
        <a
          href="https://github.com/NacomiTagiera"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <AiOutlineGithub size={45} />
        </a>
        <a
          href="https://www.facebook.com/kubapawlak123321/"
          target="_blank"
          className="mx-5 hover:opacity-80 transition"
        >
          <AiFillFacebook size={45} />
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-pawlak-frontend-dev/"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <AiFillLinkedin size={45} />
        </a>
      </div>
      <p className="font-semibold pb-4 px-3 text-center text-lg md:text-xl">
        Jakub Pawlak - przyszły frontend developer &copy; Wszelkie prawa
        zastrzeżone
      </p>
    </footer>
  );
}
