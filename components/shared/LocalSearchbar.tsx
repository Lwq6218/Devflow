"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [search, setSearch] = useState(query || "")
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: search
        })
        router.push(newUrl,{scroll:false})
      }else{
        if(pathname === route){
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['q'],
          })

        router.push(newUrl,{scroll:false})
        }
      }
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [search, route, pathname, router, searchParams, query])
 console.log(pathname);
 console.log(route);
  
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
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
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
