"use client";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeFilter() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState('')
  const router = useRouter()
  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive('')
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: null
      })
      router.push(newUrl, { scroll: false })
    } else {
      setActive(item)
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: item.toLowerCase()
      })
      router.push(newUrl, { scroll: false })
    }
  }
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => { }}
          onClickCapture={() => handleTypeClick(filter.value)}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === filter.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 "
            }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
}
