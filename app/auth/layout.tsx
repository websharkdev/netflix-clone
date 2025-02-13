import { Fragment } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
