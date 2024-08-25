import { QueryClient } from "@tanstack/react-query";

/** @see {docs} https://tanstack.com/query/latest/docs/reference/QueryClient#queryclient */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ...
    },
    mutations: {
      // ...
    },
  },
});

export default queryClient;
