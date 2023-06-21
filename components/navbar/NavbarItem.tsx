type Props = {
  label: string;
};

export const NavbarItem = ({ label }: Props) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};
