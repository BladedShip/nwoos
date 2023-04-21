import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center p-8">
        <Bars3Icon className="h-8 w-8 text-[#2c2c2c] hidden md:inline" />
          <Link href="/" prefetch={false}>
            <h1 className="font-serif text-4xl text-center">
              <span className="decoration-6 underline decoration-[#dbbadd]">
                Nwoos
              </span>
              , The worst news app
            </h1>
          </Link>
        <div className="flex items-center space-x-4 justify-end">
          <DarkModeButton />
          <Link
            href="https://adithyan.tech"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 text-sm md:text-base text-[#2c2c2c] flex items-center rounded-full hover:bg-[#dbbadd] hover:text-[#fcfcfc] transition duration-200 justify-center border border-[#dbbadd] dark:text-[#fcfcfc] dark:hover:text-[#2c2c2c]"
          >
            More by me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
