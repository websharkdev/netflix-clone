"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useQueryState } from "nuqs";

const MovieSearch = () => {
  const [search, setSearch] = useQueryState("s", {
    defaultValue: "",
  });

  return (
    <div className="group flex flex-nowrap relative">
      <Input
        type="text"
        className="!bg-white border-none h-10 peer group-hover:w-52 focus-visible:w-52 group-hover:placeholder:not-sr-only placeholder:sr-only focus-visible:placeholder:not-sr-only transition-all duration-300 w-10"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Movie name..."
      />
      <Search
        size={14}
        className="absolute group-hover:right-2.5 right-1.5 -translate-x-1.5 group-hover:-translate-x-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 peer-focus-visible:text-stone-950"
      />
    </div>
  );
};

export default MovieSearch;
