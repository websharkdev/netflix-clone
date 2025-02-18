import { defaultMetadata } from "@/lib/constants";
import { Metadata as TMetadata } from "next";
import { Fragment } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

export const Metadata: TMetadata = {
  ...defaultMetadata,
  title: "Sign Up",
};

const Layout = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
