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
          title: "Sign In to Your Account",
          description:
            "Access your account to manage your tasks, track progress, and stay productive. Welcome back!",
          reset: true,
          signup: true,
          signin: false,
        };
      case "signup":
        return {
          title: "Create Your Account",
          description:
            "Join us today to unlock exclusive features, stay organized, and achieve your goals effortlessly. Get started now!",
          reset: true,
          signup: false,
          signin: true,
        };
      case "reset":
        return {
          title: "Reset Your Password",
          description:
            "Forgot your password? No worries! Enter your email to reset your password and regain access to your account.",
          reset: false,
          signup: false,
          signin: true,
        };

      default:
        break;
    }
  }, [path]);

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center flex-col">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{information?.title}</CardTitle>
          <CardDescription className="sr-only">
            {information?.description}
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-between flex-col gap-2.5 w-full">
          <div className="flex gap-2.5 items-center w-full">
            {information?.reset ? (
              <Button
                variant="ghost"
                href="/auth/reset"
                className="w-full h-10"
              >
                Forgot password?
              </Button>
            ) : null}
            {information?.signin ? (
              <Button
                variant="ghost"
                href="/auth/signin"
                className="w-full h-10"
              >
                Sign in
              </Button>
            ) : null}
            {information?.signup ? (
              <Button
                variant="ghost"
                href="/auth/signup"
                className="w-full h-10"
              >
                Sign up
              </Button>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Template;
