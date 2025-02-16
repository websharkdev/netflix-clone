"use client";

import { MovieSearch } from "@/components/custom/actions";
import { CUser } from "@/components/custom/cards";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const Template = ({ children }: Props) => {
  const { isLogined } = {
    isLogined: true,
  };

  return (
    <div className="bg-stone-50 dark:bg-black h-full w-full min-h-screen text-stone-900 dark:text-white">
      <header className="mx-auto z-50 bg-stone-50/40 dark:bg-black/40 backdrop-blur-lg px-6 py-4 rounded-xl container flex items-center flex-nowrap justify-between">
        <Link
          href="/"
          className="font-bold text-red-600 dark:text-white text-lg uppercase"
        >
          nefflix
        </Link>

        {isLogined ? (
          <div className="text-sm font-medium flex justify-between gap-10 items-center transition-all duration-500">
            <Link
              className="transition-all duration-500 text-stone-500 hover:text-stone-950"
              href="/dashboard"
            >
              Home
            </Link>
            <Link
              className="transition-all duration-500 text-stone-500 hover:text-stone-950"
              href="/dashboard/series"
            >
              Series
            </Link>
            <Link
              className="transition-all duration-500 text-stone-500 hover:text-stone-950"
              href="/dashboard/movies"
            >
              Movies
            </Link>
            <Link
              className="transition-all duration-500 text-stone-500 hover:text-stone-950"
              href="/dashboard/categories"
            >
              Categories
            </Link>
          </div>
        ) : null}

        <div className="flex items-center gap-2.5">
          <MovieSearch />
          <ThemeToggle />

          {isLogined ? (
            <CUser />
          ) : (
            <Fragment>
              <Button size="sm" variant="secondary" href="/auth/signin">
                Sign in
              </Button>
              <Button size="sm" href="/auth/signup">
                Sign up
              </Button>
            </Fragment>
          )}
        </div>
      </header>
      {children}
    </div>
  );
};

export default Template;
