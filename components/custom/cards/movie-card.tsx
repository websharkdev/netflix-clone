"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMovieStore } from "@/store/movie.store";
import { IMovie } from "@/types/general";
import { QueryStatus } from "@tanstack/react-query";
import { Play } from "lucide-react";

const CMovie = ({
  description,
  duration,
  genre,
  thumbnailUrl,
  title,
  videoUrl,
  status,
}: IMovie & {
  status: QueryStatus;
}) => {
  const { onToggle } = useMovieStore();

  return (
    <Card className="flex flex-col group">
      <CardHeader className="pt-0">
        <CardTitle>
          {status === "success" ? (
            <span className="text-sm md:text-lg">{title}</span>
          ) : (
            <div className="w-9/12 h-8 rounded-md bg-stone-50 dark:bg-stone-800 animate-pulse" />
          )}
        </CardTitle>
        <CardDescription>
          {status === "success" ? (
            <ScrollArea className="h-20">
              <span className="text-xs md:text-sm leading-relaxed font-mono font-medium">
                {description}
              </span>
            </ScrollArea>
          ) : (
            <div className="w-full h-20 rounded-md bg-stone-50 dark:bg-stone-800 animate-pulse" />
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="-order-10 pt-6 grid grid-cols-1 gap-4">
        <div className="flex flex-1 justify-center items-center gap-10 group relative play-btn transition-all duration-500">
          {status === "success" ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="object-cover aspect-video w-full opacity-80 hover:opacity-100 !rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full aspect-video rounded-md bg-stone-50 dark:bg-stone-800 animate-pulse" />
          )}
          <Button
            disabled={status !== "success"}
            size="icon"
            onClick={() => onToggle(videoUrl)}
            className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto peer size-10 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full text-stone-50 transition-all duration-500"
          >
            <Play size={48} />
          </Button>
          <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto size-12 peer-hover:size-[70px] bg-stone-950/20 absolute z-5 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
          <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto size-14 peer-hover:size-20 bg-stone-950/20 absolute z-[2] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
        </div>
        <div className="flex items-center gap-2.5">
          <Badge>{duration}</Badge>
          <Badge variant="secondary">{genre}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CMovie;
