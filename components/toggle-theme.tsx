"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleModeButton() {
  const { theme, setTheme } = useTheme();

  //function to toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={toggleTheme}
      className="cursor-pointer px-6 border rounded-3xl shadow-md "
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:block hidden rotate-180 dark:scale-100 scale-0 animate-[spin_.5s_ease-in-out] fill-foreground " />

      <Moon className="h-[1.2rem] w-[1.2rem] dark:hidden transition-all animate-[spin_.5s_ease-in-out] rotate-0 scale-100 dark:rotate-180 dark:scale-0 fill-background" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
