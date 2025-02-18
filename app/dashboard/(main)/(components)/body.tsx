"use client";

import { useMovies } from "@/actions";
import { CMovie } from "@/components/custom/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { removeSpacing } from "@/lib/string";
import { useMovieStore } from "@/store/movie.store";
import { IMovie } from "@/types/general";
import { Play } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

const Body = () => {
  const [search] = useQueryState("s", {
    defaultValue: "",
  });
  const { status, data, error } = useMovies();
  const { onToggle } = useMovieStore();

  const parsed = useMemo(() => {
    if (status === "success") {
      const randomIndex = Math.floor(Math.random() * (data.length - 0 + 1) + 0);

      const current = data.find((movie) =>
        removeSpacing(movie.title).startsWith(removeSpacing(search))
      );

      if (current) {
        return current as IMovie;
      }

      return data[randomIndex];
    }

    return {} as IMovie;
  }, [status, data, error, search]);

  return (
    <div className="grid grid-cols-1 gap-14">
      <div className="container mx-auto h-[calc(100dvh_-_100px)] flex flex-col justify-between">
        <div className="flex flex-1 justify-center items-center gap-10 group relative play-btn transition-all duration-500">
          {status === "success" && parsed.thumbnailUrl.length > 0 ? (
            <img
              src={parsed.thumbnailUrl || ""}
              alt={parsed.title || ""}
              className="object-cover w-full max-w-4xl h-[500px] opacity-80 hover:opacity-100 !rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="object-contain w-full aspect-video max-w-4xl rounded-xl bg-stone-100 dark:bg-stone-800 border border-input animate-pulse" />
          )}
          <Button
            disabled={status !== "success"}
            size="icon"
            onClick={() => onToggle(parsed.videoUrl)}
            className="peer size-14 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full text-stone-50 transition-all duration-500"
          >
            <Play size={48} />
          </Button>
          <div className="size-14 peer-hover:size-[70px] bg-stone-950/20 absolute z-5 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
          <div className="size-14 peer-hover:size-20 bg-stone-950/20 absolute z-[2] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
        </div>
        <div className="grid grid-cols-10 h-max gap-10 items-end relative">
          {status === "success" ? (
            <h2 className="col-span-6 text-8xl font-bold text-left max-w-4xl">
              {parsed.title}
            </h2>
          ) : (
            <div className="col-span-6">
              <div className="w-9/12 h-20 bg-stone-100 dark:bg-stone-800 animate-pulse rounded-md"></div>
            </div>
          )}
          <div className="col-span-4 grid grid-cols-1 gap-2.5">
            <div className="flex gap-2.5">
              {status === "success" ? (
                <Badge className="w-max">{parsed.duration}</Badge>
              ) : (
                <div className="w-20 h-8 bg-stone-100 dark:bg-stone-800 animate-pulse rounded-full" />
              )}
              {status === "success" ? (
                <Badge variant="secondary" className="w-max">
                  {parsed.genre}
                </Badge>
              ) : (
                <div className="w-20 h-8 bg-stone-100 dark:bg-stone-800 animate-pulse rounded-full" />
              )}
            </div>
            {status === "success" ? (
              <p className="max-w-lg text-xs md:text-sm leading-relaxed font-mono font-medium">
                {parsed.description}
              </p>
            ) : (
              <div className="w-full h-20 bg-stone-100 dark:bg-stone-800 animate-pulse rounded-md" />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto h-[calc(100dvh_-_100px)] flex flex-col gap-5 pt-5 border-t border-input">
        <div className="flex justify-between items-center gap-2">
          <h6 className="text-lg font-semibold">Collections</h6>
          <Button variant="link" size="sm">
            All
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {status === "success"
            ? data.map((movie: IMovie, index: number) => (
                <CMovie
                  key={`dashboard/main--${index}`}
                  {...movie}
                  status={status}
                />
              ))
            : [...Array(7)].map((_, index) => (
                <CMovie
                  key={`dashboard/main--skeleton--${index}`}
                  {...({} as IMovie)}
                  status={status}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
