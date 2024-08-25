import { useQuery } from "@tanstack/react-query";
import getUser from "../apis/getUser";

/** @see {docs} https://tanstack.com/query/latest/docs/framework/react/guides/suspense */
const useGetUser = () => {
  return useQuery({
    queryKey: ["APP", "USER"],
    queryFn: async () => {
      const response = await getUser();

      return response;
    },
    select: (response) => response?.data,

    /** useQuery 를 사용 시, useSuspenseQuery 를 사용해야한다. */
    // suspense: true,

    /** 에러를 던지지않고, 페이지에서 직접 처리한다. */
    throwOnError: false,

    /**
     * @see {docs} https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery#usesuspensequery
     *
     * Q, useSuspenseQuery 를 사용하면, throwOnError(default, true) 값을 변동할 수 없다.
     * useSuspenseQuery() + throwsOnError: false 조합을 어떻게 만들어낼까.
     **/
  });
};

export default useGetUser;
