import { Fragment } from "react";
import { defaultMetadata } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Reset Password | Nefflix",
};

export default function Reset() {
  return <Fragment />;
}
