"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const Body = () => (
  <div className="flex flex-col overflow-hidden">
    <div className="container mx-auto min-h-screen relative overflow-hidden flex flex-col justify-center gap-2.5 pt-2.5">
      <h6 className="text-center text-sm font-mono font-medium uppercase">
        A nefflix original series
      </h6>
      <h1 className="text-[18vw] 2xl:text-[22rem] leading-none font-bold uppercase text-center">
        Nefflix
      </h1>

      <div className="flex items-center justify-center gap-5 w-full">
        <div className="flex items-center gap-1.5 w-full max-w-md">
          <Input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm border border-input"
          />
          <Button variant="secondary">
            <span>Get Started</span>
            <ChevronRight />
          </Button>
        </div>
        <p className="text-stone-950 dark:text-stone-50 text-sm font-mono font-medium uppercase max-w-md">
          Unlimited movies, TV shows, and more. Starts at EUR 6.99. Cancel
          anytime. Ready to watch? Enter your email to create or restart your
          membership.
        </p>
      </div>
    </div>
  </div>
);

export default Body;
