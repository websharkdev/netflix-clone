import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { CustomInput } from "@/components";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Meta from "@/lib/meta";

const Auth = () => {
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

  const { name, email, password } = form;

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <Meta title="Auth">
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
                  <CustomInput
                    id="name"
                    label="Name"
                    onChange={(e: any) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    type="email"
                    value={form.name}
                  />
                )}
                <CustomInput
                  id="email"
                  label="Email"
                  onChange={(e: any) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  type="email"
                  value={form.email}
                />
                <CustomInput
                  id="password"
                  label="Password"
                  onChange={(e: any) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  type="password"
                  value={form.password}
                />
              </div>

              <button
                onClick={variant === "login" ? login : register}
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>

              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition"
                >
                  <FcGoogle size={25} />
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition"
                >
                  <FaGithub size={25} />
                </div>
              </div>

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
    </Meta>
  );
};

export default Auth;
