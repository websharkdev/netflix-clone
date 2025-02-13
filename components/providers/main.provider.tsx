import { ThemeProvider } from "./theme.provider";

type Props = {
  children: Readonly<React.ReactNode>;
};

const MainProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default MainProvider;
