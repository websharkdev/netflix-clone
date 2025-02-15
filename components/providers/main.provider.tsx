"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme.provider";

type Props = {
  children: Readonly<React.ReactNode>;
};

const queryClient = new QueryClient();

const MainProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
