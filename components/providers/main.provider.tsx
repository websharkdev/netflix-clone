import { ThemeProvider } from "./theme.provider";

type Props = {
  children: Readonly<React.ReactNode>;
};

const MainProvider = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default MainProvider;
