"use client";

import { TNewPassword, TReset } from "./(components)";

export default function Reset() {
  const tab = new URLSearchParams(window.location.search).get("t") as string;

  return (
    <div className="grid grid-cols-1 gap-2.5">
      {tab === "new-password" ? <TNewPassword /> : <TReset />}
    </div>
  );
}
