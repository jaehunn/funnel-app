import { QueryClient } from "@tanstack/react-query";

/** @see {docs} https://tanstack.com/query/latest/docs/reference/QueryClient#queryclient */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /** @see {docs} https://tanstack.com/query/latest/docs/framework/react/guides/query-retries#query-retries */
      retry: false,
    },
    mutations: {
      // ...
    },
  },
});

export default queryClient;
