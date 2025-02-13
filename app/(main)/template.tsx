type Props = {
  children: Readonly<React.ReactNode>;
};

const Template = ({ children }: Props) => {
  return (
    <div className="bg-stone-50 dark:bg-black h-full w-full min-h-screen text-stone-900 dark:text-white">
      {children}
    </div>
  );
};

export default Template;
