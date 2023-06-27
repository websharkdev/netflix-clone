import { memo } from "react";

type Props = {
  id: string;
  //   onChange: (e: any) => void;
  onChange: any;
  value: string;
  label: string;
  type?: string;
};

const CustomInput = memo(({ id, onChange, value, label, type }: Props) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-100 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
