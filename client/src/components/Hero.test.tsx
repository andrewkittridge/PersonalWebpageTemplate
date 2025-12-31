import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /connect positioning, product, and lifecycle/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Product and growth marketing leader/i)
    ).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /contact/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });

  it("lists modernization highlights", () => {
    render(<Hero />);
    expect(screen.getByText(/Positioning \+ narrative design/i)).toBeInTheDocument();
    expect(screen.getByText(/Lifecycle and retention/i)).toBeInTheDocument();
    expect(screen.getByText(/RevOps and analytics/i)).toBeInTheDocument();
  });
});
