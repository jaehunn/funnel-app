import { useQuery } from "@tanstack/react-query";
import getUser from "../apis/getUser";

/** @see {docs} https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery */
const useGetUser = () => {
  return useQuery({
    queryKey: ["APP", "USER"],
    queryFn: () => {
      return getUser();
    },
    select: (response) => response?.data,
  });
};

export default useGetUser;
