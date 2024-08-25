import { ErrorBoundary } from "react-error-boundary";

import ErrorPage from "./Error.page";

const AErrorPage = () => {
  /** @see {docs} https://github.com/bvaughn/react-error-boundary#readme */
  return (
    <ErrorBoundary fallback={<>Error!</>}>
      <ErrorPage />
    </ErrorBoundary>
  );
};

export default AErrorPage;
