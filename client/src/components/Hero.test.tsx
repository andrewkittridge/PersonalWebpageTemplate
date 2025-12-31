import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Full-stack web developer specializing in Java, Spring, and enterprise solutions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Over seven years delivering secure, scalable applications/i)
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
    expect(screen.getByText(/Java & Spring Framework/i)).toBeInTheDocument();
    expect(screen.getByText(/Oracle SQL & PL\/SQL/i)).toBeInTheDocument();
    expect(screen.getByText(/Secret Security Clearance/i)).toBeInTheDocument();
  });
});
