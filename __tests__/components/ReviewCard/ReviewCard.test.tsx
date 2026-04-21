import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { RenderResult } from "@testing-library/react";

import ReviewCard from "@/components/ReviewCard/ReviewCard";

import { mockReviews } from "@tests/__mocks__/reviews.mock";

jest.mock("@/constants/reviews", () => {
  const mockData = jest.requireActual("@tests/__mocks__/reviews.mock");
  const { mockReviews } = mockData;

  return {
    __esModule: true,
    default: mockReviews,
  };
});

const renderComponent = (): RenderResult => render(<ReviewCard />);

describe("ReviewCard", () => {
  describe("rendering", () => {
    it("should render the first review name in uppercase", () => {
      renderComponent();
      expect(
        screen.getByRole("heading", { name: mockReviews[0]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });

    it("should render the first review job in uppercase", () => {
      renderComponent();
      expect(screen.getByText(mockReviews[0]!.job.toUpperCase())).toBeInTheDocument();
    });

    it("should render the first review text", () => {
      renderComponent();
      expect(screen.getByText(mockReviews[0]!.text)).toBeInTheDocument();
    });

    it("should render the review image with the correct alt text", () => {
      renderComponent();
      expect(screen.getByAltText(`Photo of ${mockReviews[0]!.name}`)).toBeInTheDocument();
    });

    it("should render the previous button", () => {
      renderComponent();
      expect(screen.getByRole("button", { name: "Previous review" })).toBeInTheDocument();
    });

    it("should render the next button", () => {
      renderComponent();
      expect(screen.getByRole("button", { name: "Next review" })).toBeInTheDocument();
    });

    it("should render the surprise me button", () => {
      renderComponent();
      expect(screen.getByRole("button", { name: "Show a random review" })).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("should show the next review when the next button is clicked", async () => {
      const user = userEvent.setup();
      renderComponent();
      await user.click(screen.getByRole("button", { name: "Next review" }));
      expect(
        screen.getByRole("heading", { name: mockReviews[1]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });

    it("should return to the first review when the prev button is clicked after going next", async () => {
      const user = userEvent.setup();
      renderComponent();
      await user.click(screen.getByRole("button", { name: "Next review" }));
      await user.click(screen.getByRole("button", { name: "Previous review" }));
      expect(
        screen.getByRole("heading", { name: mockReviews[0]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });

    it("should wrap to the last review when clicking prev from the first review", async () => {
      const user = userEvent.setup();
      renderComponent();
      await user.click(screen.getByRole("button", { name: "Previous review" }));
      expect(
        screen.getByRole("heading", { name: mockReviews[2]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });

    it("should wrap to the first review when clicking next from the last review", async () => {
      const user = userEvent.setup();
      renderComponent();
      await user.click(screen.getByRole("button", { name: "Next review" }));
      await user.click(screen.getByRole("button", { name: "Next review" }));
      await user.click(screen.getByRole("button", { name: "Next review" }));
      expect(
        screen.getByRole("heading", { name: mockReviews[0]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });

    it("should show a specific review when the surprise button is clicked", async () => {
      const user = userEvent.setup();
      jest.spyOn(Math, "random").mockReturnValue(0.5);
      renderComponent();
      await user.click(screen.getByRole("button", { name: "Show a random review" }));
      expect(
        screen.getByRole("heading", { name: mockReviews[1]!.name.toUpperCase() })
      ).toBeInTheDocument();
    });
  });
});
