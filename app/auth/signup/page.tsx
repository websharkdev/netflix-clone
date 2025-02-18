import { defaultMetadata } from "@/lib/constants";
import { Body } from "./(components)";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Sign Up | Nefflix",
};

const Page = () => <Body />;

export default Page;
