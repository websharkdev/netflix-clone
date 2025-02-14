"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="email">Password</Label>
          <Input id="password" type="password" placeholder="********" />
        </div>
        <Button className="w-full">Sign up</Button>
      </div>
    </form>
  );
}
