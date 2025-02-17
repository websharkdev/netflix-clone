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
import { toast } from "@/hooks/use-toast";
import { forgetPassword } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export default function TReset() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof schema>) => {
    const { success, error: verror } = schema.safeParse(values);
    if (success) {
      return forgetPassword({
        email: values.email,
        redirectTo: "/auth/reset?t=new-password",
        fetchOptions: {
          onSuccess: () => {
            toast({
              title: `Success!`,
              description: `We've sent you an email with instructions to reset your password. Please check your inbox and follow the link to proceed`,
            });
          },
          onError: (clsx) => {
            toast({
              title: `Ooops! ${clsx.error.message}`,
              description: `There was an issue sending the password reset email. Please try again later.`,
            });
          },
        },
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
          <Button type="submit" className="w-full">
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
}
