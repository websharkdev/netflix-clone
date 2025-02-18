"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Github, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const Body = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignInGitHub = async () => {
    return await signIn.social({
      provider: "github",
    });
  };

  const handleSignInGoogle = async () => {
    return await signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { success } = formSchema.safeParse(values);
    if (success) {
      return await signIn.email({
        email: values.email, // user email address
        password: values.password, // user password -> min 8 characters by default
        callbackURL: "/dashboard",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2.5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex flex-nowrap items-center border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                    <Input
                      placeholder="**********"
                      type={passwordVisible ? "text" : "password"}
                      className="bg-none !ring-0 !outline-none !border-none"
                      {...field}
                    />
                    <div
                      className="size-10 flex justify-center items-center cursor-pointer"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <Eye size={14} />
                      ) : (
                        <EyeClosed size={14} />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleSignInGitHub}
        >
          <Github size={14} />
          <span>GitHub</span>
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleSignInGoogle}
        >
          <Mail size={14} />
          <span>Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Body;
