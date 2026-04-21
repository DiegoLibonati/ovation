import type { JSX } from "react";

import ReviewCard from "@/components/ReviewCard/ReviewCard";

import "@/pages/OvationPage/OvationPage.css";

const OvationPage = (): JSX.Element => {
  return (
    <main className="main-app">
      <section className="ovation-page">
        <article className="ovation-page__header">
          <h1 className="ovation-page__title">Our Reviews</h1>
          <div className="ovation-page__separator"></div>
        </article>

        <article className="review-wrapper">
          <ReviewCard></ReviewCard>
        </article>
      </section>
    </main>
  );
};

export default OvationPage;
