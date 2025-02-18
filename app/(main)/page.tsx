import { defaultMetadata } from "@/lib/constants";
import { Body } from "./(components)";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Main | Nefflix",
};

export default function Home() {
  return <Body />;
}
