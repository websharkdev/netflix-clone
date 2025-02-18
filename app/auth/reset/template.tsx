"use client";

import { useQueryState } from "nuqs";
import { TNewPassword, TReset } from "./(components)";

type Props = {
  children: Readonly<React.ReactNode>;
};

const Template = ({ children }: Props) => {
  const [tab] = useQueryState("t", {
    defaultValue: "",
  });

  return (
    <div className="grid grid-cols-1 gap-2.5">
      {children}
      {tab === "new-password" ? <TNewPassword /> : <TReset />}
    </div>
  );
};

export default Template;
