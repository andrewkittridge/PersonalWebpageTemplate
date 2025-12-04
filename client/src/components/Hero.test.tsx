import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Build decisive systems/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/secure software/i)
    ).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /engage andrew/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /track record/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });

  it("lists modernization highlights", () => {
    render(<Hero />);
    expect(screen.getByText(/8\+ yrs enterprise delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Secret clearance/i)).toBeInTheDocument();
    expect(screen.getByText(/USMC platforms/i)).toBeInTheDocument();
  });
});
