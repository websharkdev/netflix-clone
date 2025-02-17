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
import { Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignInGitHub = async () => {
    const data = await signIn.social({
      provider: "github",
    });

    console.log(data);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { success, error: verror } = formSchema.safeParse(values);
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
                  <Input placeholder="**********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-2.5">
        <Button size="icon" variant="ghost" onClick={handleSignInGitHub}>
          <Github size={14} />
        </Button>
      </div>
    </div>
  );
}
