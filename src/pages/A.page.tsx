import useGetUser from "../queries/useGetUser";

const A = () => {
  const { data: userData } = useGetUser();

  console.log(userData);

  return (
    <div>
      <p>{userData?.name ?? "-"}</p>
    </div>
  );
};

export default A;
