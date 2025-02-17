"use client";

import { useQueryState } from "nuqs";
import { TNewPassword, TReset } from "./(components)";

export default function Reset() {
  const [tab] = useQueryState("t", {
    defaultValue: "",
  });

  return (
    <div className="grid grid-cols-1 gap-2.5">
      {tab === "new-password" ? <TNewPassword /> : <TReset />}
    </div>
  );
}
