import { isAxiosError } from "axios";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (isAxiosError(error)) {
    return (
      <p>
        Axios Error,{" "}
        {error?.response?.data?.reason || "API 에러가 발생했습니다."}
      </p>
    );
  }

  if (error instanceof Error) {
    return <p>Error, {error?.message || "예상치 못한 에러가 발생했습니다."}</p>;
  }

  return (
    <div>
      <p>에러가 발생했어요.</p>
    </div>
  );
}

export default ErrorPage;
