import useGetUser from "../queries/useGetUser";

const A = () => {
  const { data: userData, error, isFetching } = useGetUser();

  console.log({ error });

  if (error != null) {
    console.log("error?!");

    // retry === false
    if (isFetching === false) {
      // ...
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
