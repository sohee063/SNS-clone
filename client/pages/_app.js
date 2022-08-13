import React, { useRef } from "react";
import { Hydrate } from "react-query/hydration";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.scss";

const App = ({ Component, pageProps }) => {
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      });
    return clientRef.current;
  };

  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.HydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;
