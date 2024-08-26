import { useQuery } from "@tanstack/react-query";
import getUser from "../apis/getUser";

/** @see {docs} https://tanstack.com/query/latest/docs/framework/react/guides/suspense */
const useGetUser = () => {
  return useQuery(
    ["APP", "USER"],
    async () => {
      const response = await getUser();

      return response;
    },
    {
      select: (response) => response?.data,

      // version 4, 에서는 수동으로 설정이 가능함.
      suspense: true,
      useErrorBoundary: false,
    }
  );
};

export default useGetUser;
