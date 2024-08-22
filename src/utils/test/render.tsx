import { ReactElement } from "react";
import { render as RTLrender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const render = (element: ReactElement) => {
  const user = userEvent.setup();

  return {
    user,
    ...RTLrender(<>{element}</>),
  };
};
