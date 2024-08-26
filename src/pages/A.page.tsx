import useGetUser from "../queries/useGetUser";

const A = () => {
  const { data: userData, error, isFetching } = useGetUser();

  if (error != null) {
    // retry === false
    if (isFetching === false) {
      // Axios Error
      throw error;

      // Throw Error
      // throw Error("커스텀 에러입니다.");
    }
  }

  return (
    <div>
      <p>{userData?.name ?? "-"}</p>
      <p>{status}</p>
    </div>
  );
};

export default A;
