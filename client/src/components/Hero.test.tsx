import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero headline and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Building modern web app experiences with secure, scalable engineering/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I craft responsive, analytics-friendly platforms/i)
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
    expect(screen.getByText(/Design systems & tokens/i)).toBeInTheDocument();
    expect(screen.getByText(/Secure delivery with clearance/i)).toBeInTheDocument();
    expect(screen.getByText(/LLM-infused product flows/i)).toBeInTheDocument();
  });
});
