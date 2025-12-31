import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /We design the story/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/expert marketers/i)
    ).toBeInTheDocument();
  });

  it("highlights primary contact actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /book a discovery call/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view playbooks/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });

  it("lists modernization highlights", () => {
    render(<Hero />);
    expect(screen.getByText(/Story-led growth/i)).toBeInTheDocument();
    expect(screen.getByText(/Full-funnel campaigns/i)).toBeInTheDocument();
    expect(screen.getByText(/RevOps and analytics/i)).toBeInTheDocument();
  });
});
