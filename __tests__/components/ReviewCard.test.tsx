import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReviewCard from "@/components/ReviewCard/ReviewCard";

import { mockReviews, mockReview, mockReview2 } from "@tests/__mocks__/reviews.mock";

interface RenderComponent {
  container: HTMLElement;
}

const renderComponent = (): RenderComponent => {
  const { container } = render(<ReviewCard />);
  return { container };
};

describe("ReviewCard", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the first review image with accessible alt text", () => {
    renderComponent();
    expect(screen.getByRole("img")).toHaveAttribute("alt", `Photo of ${mockReview.name}`);
  });

  it("should render the first review name in uppercase", () => {
    renderComponent();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      mockReview.name.toUpperCase()
    );
  });

  it("should render the first review job in uppercase", () => {
    renderComponent();
    const jobEl = screen.getByText(mockReview.job.toUpperCase());
    expect(jobEl).toBeInTheDocument();
  });

  it("should render the first review text", () => {
    renderComponent();
    expect(screen.getByText(mockReview.text)).toBeInTheDocument();
  });

  it("should render the previous button with correct aria-label", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: "Previous review" })).toBeInTheDocument();
  });

  it("should render the next button with correct aria-label", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: "Next review" })).toBeInTheDocument();
  });

  it("should render the surprise button with correct aria-label", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: "Show a random review" })).toBeInTheDocument();
  });

  it("should navigate to the next review when the next button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "Next review" }));

    expect(await screen.findByRole("img")).toHaveAttribute("alt", `Photo of ${mockReview2.name}`);
    expect(screen.getByText(mockReview2.text)).toBeInTheDocument();
  });

  it("should wrap to the last review when previous is clicked from the first", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "Previous review" }));

    const lastReview = mockReviews[mockReviews.length - 1];
    expect(await screen.findByRole("img")).toHaveAttribute("alt", `Photo of ${lastReview!.name}`);
    expect(screen.getByText(lastReview!.text)).toBeInTheDocument();
  });

  it("should wrap back to the first review when next is clicked from the last", async () => {
    const user = userEvent.setup();
    renderComponent();

    for (const _mR of mockReviews) {
      await user.click(screen.getByRole("button", { name: "Next review" }));
    }

    expect(await screen.findByRole("img")).toHaveAttribute("alt", `Photo of ${mockReview.name}`);
  });

  it("should show the review at the index determined by Math.random when surprise is clicked", async () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "Show a random review" }));

    const expectedIndex = Math.floor(0.5 * mockReviews.length);
    expect(await screen.findByRole("img")).toHaveAttribute(
      "alt",
      `Photo of ${mockReviews[expectedIndex]!.name}`
    );
  });
});
