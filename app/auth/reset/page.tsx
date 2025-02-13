"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Reset() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>
      </div>
    </form>
  );
}
