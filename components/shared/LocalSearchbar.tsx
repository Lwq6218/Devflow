"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClases?: string;
}
export default function LocalSearchbar({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClases,
}: Props) {
  return (
    <div
      className={`background-light800_darkgradient flex
   min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClases} `}
    >
      {iconPosition === "left" && (
        <Image
          className="cursor-pointer"
          src={imgSrc}
          alt={placeholder}
          width={24}
          height={24}
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          className="cursor-pointer"
          src={imgSrc}
          alt={placeholder}
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
