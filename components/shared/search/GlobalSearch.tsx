import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function GlobalSearch() {
  return (
    <div
      className="w-full max-w-[600px]
  max-lg:hidden"
    >
      <div className="background-light800_darkgradient  flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          className="cursor-pointer"
          alt="search"
        />
        <Input
          type="text"
          placeholder="Search globally"
          className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
}
