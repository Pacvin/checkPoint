import type { IReview } from '~/shared/types/review';

import styles from './GameReviews.module.scss';

interface GameReviewsProps {
  reviews?: IReview[];
}

export const GameReviews = ({ reviews }: GameReviewsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const isFilled = index < rating;
      return (
        <svg
          key={index}
          className={`${styles.star} ${isFilled ? styles.starFilled : styles.starEmpty}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.sectionTitle}>User Reviews</h3>
      <div className={styles.list}>
        {!reviews || reviews.length === 0 ? (
          <div className={styles.placeholder}>Reviews will be displayed here...</div>
        ) : (
          reviews.map((review) => {
            const userObj = review.user as unknown as { username?: string; name?: string };
            const authorName = userObj?.username || userObj?.name || 'Anonymous User';

            return (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.header}>
                  <span className={styles.author}>{authorName}</span>
                  <div className={styles.stars}>{renderStars(review.rate)}</div>
                </div>
                <span className={styles.date}>{review.createdAt}</span>

                {review.title && <h4 className={styles.reviewTitle}>{review.title}</h4>}
                <p className={styles.text}>{review.message}</p>

                <button className={styles.helpfulBtn}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  Helpful
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
