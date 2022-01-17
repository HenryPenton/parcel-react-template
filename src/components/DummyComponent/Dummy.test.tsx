import React from "react";
import { render, screen } from "@testing-library/react";
import { Dummy } from "./Dummy";

describe("Dummy component", () => {
  it("should render with text", () => {
    render(<Dummy />);
    const content = "dummy content";

    const testComponent = screen.getByText(content);

    expect(testComponent).toBeDefined();
  });
});
