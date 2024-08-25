import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <p>에러가 발생했어요.</p>
      <p>{String(error)}</p>
    </div>
  );
}

export default ErrorPage;
