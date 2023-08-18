"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunAnimation from "./svg/SunAnimation";
import MoonAnimation from "./svg/MoonAnimation";

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    const isDarkMode = theme === "dark";


  return (
       <div>
      {isDarkMode ? (
        <div onClick={() => setTheme("light")}>
          <SunAnimation />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <MoonAnimation />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher