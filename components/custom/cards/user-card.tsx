"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession, signOut } from "@/lib/auth-client";
import { Bolt, Heart, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CUser = () => {
  const router = useRouter();
  const { data } = useSession();

  const handleSignOut = async () => {
    return await signOut().then((res) => {
      router.push("/");

      return res;
    });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={data?.user.image || ""} />
          <AvatarFallback>{data?.user.name}</AvatarFallback>
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
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className="text-sm h-6 text-stone-700 hover:text-stone-950 bg-stone-50/30 hover:bg-stone-50 py-1 px-2 rounded-md font-semibold flex justify-start items-center gap-1.5"
        >
          <LogOut size={14} />
          <span>Log out</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default CUser;
