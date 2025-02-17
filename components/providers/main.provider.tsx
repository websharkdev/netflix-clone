"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import ModalsProvider from "./modals.provider";
import { ThemeProvider } from "./theme.provider";
import { Suspense } from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const queryClient = new QueryClient();

const MainProvider = ({ children }: Props) => {
  return (
    <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <QueryClientProvider client={queryClient}>
          <Suspense>{children}</Suspense>
        </QueryClientProvider>
        <ModalsProvider />
      </ThemeProvider>
    </NuqsAdapter>
  );
};

export default MainProvider;
