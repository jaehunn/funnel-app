import { screen } from "@testing-library/react";
import { render } from "@/lib/testing-library";

import App from "./App";

describe("App", () => {
  test("테스트 해볼게요.", () => {
    render(<App />);

    screen.getByText("App");
  });
});
