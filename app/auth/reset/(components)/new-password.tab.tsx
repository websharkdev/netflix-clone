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
import { resetPassword } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  password: z.string().min(8),
});

const TNewPassword = () => {
  const router = useRouter();
  const [token] = useQueryState("token", {
    defaultValue: "",
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof schema>) => {
    const { success } = schema.safeParse(values);
    if (success) {
      const { data, error } = await resetPassword({
        newPassword: values.password,
        token,
        fetchOptions: {
          onSuccess: () => {
            toast({
              title: "Password Successfully Changed",
              description:
                "Your password has been successfully updated. You can now log in with your new credentials.",
            });
            router.push("/auth/signin");
          },
        },
      });

      if (error) {
        return toast({
          title: "Ooops!",
          description: error.message,
        });
      }

      toast({
        title: "Success!",
        description: "Password succesfuly reseted",
      });

      return data;
    }
  };
  return (
    <div className="grid grid-cols-1 gap-2.5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TNewPassword;
