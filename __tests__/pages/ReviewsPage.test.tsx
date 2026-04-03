import { render, screen } from "@testing-library/react";

import ReviewsPage from "@/pages/ReviewsPage/ReviewsPage";

type RenderPage = { container: HTMLElement };

const renderPage = (): RenderPage => {
  const { container } = render(<ReviewsPage />);
  return { container };
};

describe("ReviewsPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the main element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("main.main-app")).toBeInTheDocument();
  });

  it("should render the reviews section", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLElement>("section.reviews-page")).toBeInTheDocument();
  });

  it("should render the page heading with 'Our Reviews'", () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Our Reviews");
  });

  it("should render the separator element", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLDivElement>(".reviews-page__separator")).toBeInTheDocument();
  });

  it("should render the ReviewCard component", () => {
    const { container } = renderPage();
    expect(container.querySelector<HTMLDivElement>(".review")).toBeInTheDocument();
  });
});
