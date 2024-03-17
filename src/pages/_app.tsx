import "../../src/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const configQuery = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

function App({ Component, pageProps }: AppProps) {
  const isDevEnv = process.env.NEXT_PUBLIC_ENV === "development";
  const [queryClient] = React.useState(() => new QueryClient(configQuery));
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {isDevEnv && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default App;
