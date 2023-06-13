import { useCallback, useState } from "react";
import { Input } from "../components";

type Props = {};

const Auth = (props: Props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-zinc-900 bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Create an account"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="Name"
                  onChange={(e: any) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  type="email"
                  value={form.name}
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(e: any) =>
                  setForm({ ...form, email: e.target.value })
                }
                type="email"
                value={form.email}
              />
              <Input
                id="password"
                label="Password"
                onChange={(e: any) =>
                  setForm({ ...form, password: e.target.value })
                }
                type="password"
                value={form.password}
              />
            </div>

            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                className="text-white ml-1 hover:underline cursor-pointer transition"
                onClick={toggleVariant}
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
