import { Fragment } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const Template = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default Template;
