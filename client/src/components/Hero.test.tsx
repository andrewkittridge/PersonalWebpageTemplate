import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Modernizing secure enterprise systems for the mission/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Accomplished Full-Stack Java Developer/i)
    ).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /schedule a call/i })
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
    expect(screen.getByText(/Enterprise modernization/i)).toBeInTheDocument();
    expect(screen.getByText(/STIG-compliant delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/AI-assisted workflows/i)).toBeInTheDocument();
  });
});
