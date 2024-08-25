import { PropsWithChildren } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

/** @see {docs} https://tanstack.com/query/latest/docs/framework/react/guides/suspense#resetting-error-boundaries */
const ErrorResetBoundary = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button type="button" onClick={() => resetErrorBoundary()}>
                Try again
              </button>
            </div>
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorResetBoundary;
