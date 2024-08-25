/** @see {docs} https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary */

import { AxiosError } from "axios";
import React, { PropsWithChildren } from "react";

type FallbackProps = {
  error: Nullable<AxiosError | Error>;
};

type Props = PropsWithChildren<{
  fallback: ({ error }: FallbackProps) => React.ReactElement;
}>;

type State = {
  error: Nullable<AxiosError | Error>;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { error: null };
  }

  static getDerivedStateFromError(error: State["error"]) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  //   componentDidCatch(error: State["error"], info) {
  //     // Example "componentStack":
  //     //   in ComponentThatThrows (created by App)
  //     //   in ErrorBoundary (created by App)
  //     //   in div (created by App)
  //     //   in App
  //   }

  render() {
    if (this.state.error != null) {
      return React.createElement(this.props.fallback, {
        error: this.state.error,
      });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
