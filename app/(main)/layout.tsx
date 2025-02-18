import { Metadata as TMetadata } from "next";
import { defaultMetadata } from "@/lib/constants";
import { Fragment } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

export const Metadata: TMetadata = {
  ...defaultMetadata,
  title: "Main | Nefflix",
};

const Layout = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
