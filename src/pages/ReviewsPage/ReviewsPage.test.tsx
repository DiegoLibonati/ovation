import { screen, render } from "@testing-library/react";

import { ReviewsPage } from "@src/pages/ReviewsPage/ReviewsPage";

import { mockReviews } from "@tests/jest.constants";

type RenderComponent = { container: HTMLElement };

const renderComponent = (): RenderComponent => {
  const { container } = render(<ReviewsPage />);

  return {
    container: container,
  };
};

jest.mock("@src/constants/reviews", () => {
  const { mockReviews } = jest.requireActual("@tests/jest.constants");
  return { __esModule: true, default: mockReviews };
});

describe("ReviewsPage.tsx", () => {
  describe("General Tests.", () => {
    test("You must render the title of the application.", () => {
      renderComponent();

      const titleApp = screen.getByRole("heading", {
        name: /our reviews/i,
      });

      expect(titleApp).toBeInTheDocument();
    });

    test("It should render the first review only.", () => {
      const firstReview = mockReviews[0];

      renderComponent();

      const img = screen.getByRole("img");
      const headingName = screen.getByRole("heading", {
        name: firstReview.name.toUpperCase(),
      });
      const jobName = screen.getByText(firstReview.job.toUpperCase());
      const description = screen.getByText(firstReview.text);
      const buttonLeftReview = screen.getByRole("button", {
        name: /left review/i,
      });
      const buttonRightReview = screen.getByRole("button", {
        name: /right review/i,
      });
      const buttonSurpriseMe = screen.getByRole("button", {
        name: /surprise me review/i,
      });

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", firstReview.image);
      expect(img).toHaveAttribute("alt", firstReview.text);
      expect(headingName).toBeInTheDocument();
      expect(jobName).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(buttonLeftReview).toBeInTheDocument();
      expect(buttonRightReview).toBeInTheDocument();
      expect(buttonSurpriseMe).toBeInTheDocument();

      mockReviews.forEach((review) => {
        if (review.id === firstReview.id) return;

        const img = screen.queryByRole("img");
        const headingName = screen.queryByRole("heading", {
          name: review.name.toUpperCase(),
        });
        const jobName = screen.queryByRole(review.job.toUpperCase());
        const description = screen.queryByRole(review.text);

        expect(img).not.toHaveAttribute("src", review!.image);
        expect(img).not.toHaveAttribute("alt", review!.text);
        expect(headingName).not.toBeInTheDocument();
        expect(jobName).not.toBeInTheDocument();
        expect(description).not.toBeInTheDocument();
      });
    });
  });
});
