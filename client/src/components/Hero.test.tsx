import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero name and subtitle", () => {
    render(<Hero />);
    // The name is split into words by TextReveal, check individual words exist
    expect(screen.getByText("Andrew")).toBeInTheDocument();
    expect(screen.getByText("Kittridge")).toBeInTheDocument();
    expect(screen.getByText(/Web Developer/i)).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /view experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });

  it("displays key stats", () => {
    render(<Hero />);
    expect(screen.getByText(/8\+ Years Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Secret Clearance/i)).toBeInTheDocument();
    expect(screen.getByText(/Greenwood, IN/i)).toBeInTheDocument();
  });
});
