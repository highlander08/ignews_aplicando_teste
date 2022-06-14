import { render, screen } from "@testing-library/react";
import { Async } from ".";

describe("component Async ",  () => {
  it("should render async", async () => {
    render(<Async />);

    expect(screen.getByText("Hello Word")).toBeInTheDocument();
    expect(await screen.findByText("button async", {}, {timeout: 2000})).toBeInTheDocument();

  });
});
