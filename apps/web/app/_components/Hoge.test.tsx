import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Hoge } from "./Hoge";

test("「Hello Web」が描画される", () => {
  render(<Hoge />);
  screen.debug();
  expect(screen.getByText("Hello Web")).toBeInTheDocument();
});
