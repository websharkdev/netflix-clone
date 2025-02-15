"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMovieStore } from "@/store/movie.store";

const MMovie = () => {
  const { open, onClose, url } = useMovieStore();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>Watching movie:</DialogTitle>
          <DialogDescription className="sr-only">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <video
          src={url}
          autoPlay
          controls
          className="aspect-video object-contain w-full h-full rounded-xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default MMovie;
