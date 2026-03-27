import ReviewCard from "@/components/ReviewCard/ReviewCard";

import "@/pages/ReviewsPage/ReviewsPage.css";

const ReviewsPage = () => {
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

export default ReviewsPage;
