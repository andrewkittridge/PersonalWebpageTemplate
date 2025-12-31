import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /SpaceX-inspired mission software with cockpit-grade calm/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I design launch systems for the web/i)
    ).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /book a launch/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /mission log/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });

  it("lists modernization highlights", () => {
    render(<Hero />);
    expect(screen.getByText(/First-principles thinking/i)).toBeInTheDocument();
    expect(screen.getByText(/Autonomy with humans-in-loop/i)).toBeInTheDocument();
    expect(screen.getByText(/Hardcore engineering/i)).toBeInTheDocument();
  });
});
