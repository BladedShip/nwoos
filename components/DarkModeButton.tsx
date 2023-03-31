"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type Props = {};

function DarkModeButton({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-[#fcfcfc]"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-[#2c2c2c]"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
