import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-secondary">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="font-semibold my-8 text-2xl md:text-3xl">
            Nie udało nam się znaleźć strony, której szukasz
          </p>
          <Link
            href="/"
            className="bg-secondary font-semibold px-8 py-3 rounded-lg text-lg"
          >
            Strona główna
          </Link>
        </div>
      </div>
    </section>
  );
}
