"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bolt, Heart, LogOut, Settings } from "lucide-react";
import Link from "next/link";

const CUser = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="grid grid-cols-1 gap-1.5 w-40">
        <Link
          className="text-sm text-stone-700 hover:text-stone-950 bg-stone-50/30 hover:bg-stone-50 py-1 px-2 rounded-md font-semibold flex items-center gap-1.5"
          href="/dashboard/watchlist"
        >
          <Heart size={14} />
          <span>Watchlist</span>
        </Link>
        <Link
          className="text-sm text-stone-700 hover:text-stone-950 bg-stone-50/30 hover:bg-stone-50 py-1 px-2 rounded-md font-semibold flex items-center gap-1.5"
          href="/dashboard/settings"
        >
          <Bolt size={14} />
          <span>Settings</span>
        </Link>
        <Link
          className="text-sm text-stone-700 hover:text-stone-950 bg-stone-50/30 hover:bg-stone-50 py-1 px-2 rounded-md font-semibold flex items-center gap-1.5"
          href="/dashboard/logout"
        >
          <LogOut size={14} />
          <span>Log out</span>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default CUser;
