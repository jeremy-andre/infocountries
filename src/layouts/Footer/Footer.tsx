import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full max-w-[125rem] flex-col gap-2 py-4 ">
      <p className="text-center">
        Desarrollado por
        <a
          href="https://jeremyandre.vercel.app/"
          target="_blank"
          className="text-lime-600"
        >
          {" "}
          Jeremy Andre
        </a>
      </p>
      <p className="text-center">
        &copy; {new Date().getFullYear()} Countries App. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
