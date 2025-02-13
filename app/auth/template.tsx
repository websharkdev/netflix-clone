"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

type RoutesPath = "signup" | "signin" | "reset";

const Template = ({ children }: Props) => {
  const path = usePathname();

  const information = useMemo(() => {
    const current: RoutesPath = path.split("/").pop() as RoutesPath;

    switch (current) {
      case "signin":
        return {
          title: "Sign In",
          description: "",
          reset: true,
          signup: true,
        };

      default:
        break;
    }
  }, [path]);

  console.log(information);

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center flex-col">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription className="sr-only">
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-between flex-col gap-2.5 w-full">
          <div className="flex gap-2.5 items-center w-full">
            <Button variant="ghost" href="/auth/reset" className="w-full h-10">
              Forgot password?
            </Button>
            <Button variant="ghost" href="/auth/signup" className="w-full h-10">
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Template;
