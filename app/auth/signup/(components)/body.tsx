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
import { signUp } from "@/lib/auth-client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const formSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z
      .string({
        required_error: "Password can not be empty.",
      })
      .regex(/^.{8,50}$/, {
        message: "Minimum 8 and maximum 50 characters.",
      })
      .regex(/(?=.*[A-Z])/, {
        message: "At least one uppercase character.",
      })
      .regex(/(?=.*[a-z])/, {
        message: "At least one lowercase character.",
      })
      .regex(/(?=.*\d)/, {
        message: "At least one digit.",
      })
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
        message: "At least one special character.",
      }),
    passwordConfirmation: z
      .string({
        required_error: "Password can not be empty.",
      })
      .regex(/^.{8,20}$/, {
        message: "Minimum 8 and maximum 50 characters.",
      })
      .regex(/(?=.*[A-Z])/, {
        message: "At least one uppercase character.",
      })
      .regex(/(?=.*[a-z])/, {
        message: "At least one lowercase character.",
      })
      .regex(/(?=.*\d)/, {
        message: "At least one digit.",
      })
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
        message: "At least one special character.",
      }),
    imageURL: z.string().url(),
  })
  .superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["passwordConfirmation"],
      });
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["password"],
      });
    }
  });

const Body = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
      imageURL: "https://avatars.githubusercontent.com/u/97165289",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { success } = formSchema.safeParse(values);

    if (success) {
      const { email, imageURL, name, password } = values;

      return await signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        image: imageURL, // user image url (optional)
        callbackURL: "/signin", // a url to redirect to after the user verifies their email (optional)
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-10 gap-5"
      >
        <div className="col-span-3">
          <FormField
            control={form.control}
            name="imageURL"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-between h-[72px]">
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger className="rounded-lg h-10 bg-stone-50 flex items-center justify-center">
                      <Avatar className="size-8">
                        <AvatarImage src={form.watch("imageURL")} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="grid grid-cols-1 gap-2"
                    >
                      <span className="text-xs">Enter URL of Image</span>
                      <Input placeholder="https://..." {...field} />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-7">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
        </div>
        <div className="col-span-full">
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
        </div>
        <div className="col-span-full">
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="**********"
                    type={passwordVisible ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="col-span-full w-full">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default Body;
