import { ReviewCard } from "@src/components/ReviewCard/ReviewCard";

import "@src/pages/ReviewsPage/ReviewsPage.css";

export const ReviewsPage = () => {
  return (
    <main className="main-app">
      <section className="reviews-page">
        <article className="reviews-page__header">
          <h1 className="reviews-page__title">Our Reviews</h1>
          <div className="reviews-page__separator"></div>
        </article>

        <article className="review-wrapper">
          <ReviewCard></ReviewCard>
        </article>
      </section>
    </main>
  );
};
