"use client";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";

export default function Theme() {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className=" focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              className="active-theme"
              width={20}
              height={20}
              alt="light mode"
            />
          ) : (
            <Image
              className="active-theme"
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="dark mode"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className=" absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-200">
          {themes.map((theme) => {
            return (
              <MenubarItem
                className="flex items-center gap-4 px-2.5 py-2"
                key={theme.value}
                onClick={() => {
                  setMode(theme.value);
                  if (theme.value !== "system") {
                    localStorage.theme = theme.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={theme.icon}
                  className={`${mode === theme.value && "active-theme"}`}
                  width={16}
                  height={16}
                  alt={theme.labbel}
                />
                <p
                  className={`body-semibold text-light-500 ${
                    theme.value === mode
                      ? "text-primary-500"
                      : "text-dark100_light900"
                  }`}
                >
                  {theme.labbel}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
