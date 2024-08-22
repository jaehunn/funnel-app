import { screen } from "@testing-library/dom";

import App from "./App";
import { render } from "./utils/test/render";

describe("App", () => {
  test("", () => {
    render(<App />);

    screen.getByText("Vite + React");
  });
});
