"use client";
import Image from "next/image";
import { Input } from "../ui/input";
interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
export default function LocalSearchbar({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: Props) {
  return (
    <div
      className={`background-light800_darkgradient flex
   min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses} `}
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
        className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
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
