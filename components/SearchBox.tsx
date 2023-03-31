"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

type Props = {};

function SearchBox({}: Props) {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center mt-4 px-8"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords.."
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-[#fcfcfc]"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-[#2c2c2c] disabled:text-gray-400 dark:text-[#fcfcfc]"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
