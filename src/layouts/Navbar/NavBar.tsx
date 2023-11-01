import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { BsInfo } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="fixed z-50 flex h-[3.5rem] w-full max-w-[125rem] items-center justify-center bg-white px-4 py-1 transition dark:bg-blackRGB10">
      <Link
        href={`/`}
        className="group absolute left-2 flex items-center gap-1"
      >
        <BsInfo className="rounded-sm bg-lime-500 text-black transition group-hover:rotate-12 group-hover:scale-125" />
        Countries
      </Link>
      {/* <div className="invisible flex items-center justify-center md:visible">
        BANDERAS
      </div> */}
      <div className="absolute right-2 flex w-[30%] items-center justify-end gap-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavBar;
