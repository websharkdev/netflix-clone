import React from "react";
import { menuData } from "./data";

type Props = {
  visible?: boolean;
};

export const MobileMenu = ({ visible }: Props) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="px-3 text-center text-white hover:underline transition"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
