import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Launch-ready software with a SpaceX-level control room vibe/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I build human, high-contrast interfaces/i)
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
    expect(screen.getByText(/Autonomy ready/i)).toBeInTheDocument();
    expect(screen.getByText(/Hardcore engineering/i)).toBeInTheDocument();
  });
});
