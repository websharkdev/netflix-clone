"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { movies } from "@/data";
import { Play } from "lucide-react";
import { useMemo } from "react";

export default function Home() {
  const parsed = useMemo(() => {
    return movies[0];
  }, [movies]);

  return (
    <div className="grid grid-cols-1 gap-14">
      <div className="container mx-auto h-[calc(100dvh_-_100px)] flex flex-col justify-between">
        <div className="flex flex-1 justify-center items-center gap-10 group relative play-btn transition-all duration-500">
          <img
            src={parsed.thumbnailUrl}
            alt={parsed.title}
            className="object-contain w-full max-w-4xl opacity-80 hover:opacity-100 !rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
          />
          <Button
            size="icon"
            className="peer size-14 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full text-stone-50 transition-all duration-500"
          >
            <Play size={48} />
          </Button>
          <div className="size-14 peer-hover:size-[70px] bg-stone-950/20 absolute z-5 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
          <div className="size-14 peer-hover:size-20 bg-stone-950/20 absolute z-[2] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
        </div>
        <div className="grid grid-cols-10 h-max gap-10 items-end relative">
          <h2 className="col-span-6 text-8xl font-bold text-left max-w-4xl">
            {parsed.title}
          </h2>
          <div className="col-span-4 grid grid-cols-1 gap-2.5">
            <div className="flex gap-2.5">
              <Badge className="w-max">{parsed.duration}</Badge>
              <Badge variant="secondary" className="w-max">
                {parsed.genre}
              </Badge>
            </div>
            <p className="max-w-lg text-xs md:text-sm leading-relaxed font-mono font-medium">
              {parsed.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-[calc(100dvh_-_100px)] flex flex-col justify-between pt-5 border-t border-input">
        <div className="flex justify-between items-center gap-2">
          <h6 className="text-lg font-semibold">Collections</h6>
          <Button variant="link" size="sm">
            All
          </Button>
        </div>
      </div>
    </div>
  );
}
