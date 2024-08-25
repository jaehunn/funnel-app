import axiosInstance from ".";

type Response = {
  name: string;
};

const getUser = () => {
  return axiosInstance<Response>({
    method: "get",
    url: `${getUserUrl()}`,
  });
};

export const getUserUrl = () => {
  return "/user" as const;
};

export default getUser;
