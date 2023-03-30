import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex justify-between items-center p-8">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            <span className="decoration-6 underline decoration-[#dbbadd]">
              Nwoos
            </span>
            , The worst news app
          </h1>
        </Link>
        <div>
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
