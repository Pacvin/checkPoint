import { useState } from 'react';
import type { IReview } from '~/shared/types/review';
import { formatDate } from '~/shared/utils';
import { addReview } from '~/shared/api/games';

import styles from './GameReviews.module.scss';

interface GameReviewsProps {
  reviews?: IReview[];
  gameId: string;
  userId?: string;
  onReviewAdded: () => void;
}

export const GameReviews = ({ reviews, gameId, userId, onReviewAdded }: GameReviewsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return alert('Please log in to leave a review');

    setIsSubmitting(true);
    try {
      await addReview(gameId, userId, { title, message, rate: rating });
      setTitle('');
      setMessage('');
      setRating(5);
      onReviewAdded();
    } catch (error) {
      alert('Failed to add review');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (currentRating: number, interactive = false) => {
    return (
      <div className={styles.starsRow}>
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = index < currentRating;
          return (
            <svg
              key={index}
              className={`${styles.star} ${isFilled ? styles.starFilled : styles.starEmpty} ${
                interactive ? styles.interactiveStar : ''
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => interactive && setRating(index + 1)}
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.sectionTitle}>User Reviews</h3>

      {userId ? (
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
          <div className={styles.ratingSelector}>
            <span>Your rating:</span>
            {renderStars(rating, true)}
          </div>
          <input
            className={styles.input}
            placeholder="Review title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={styles.textarea}
            placeholder="Share your thoughts about the game..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? 'Posting...' : 'Post Review'}
          </button>
        </form>
      ) : (
        <div className={styles.loginPrompt}>Please log in to leave a review.</div>
      )}

      <div className={styles.list}>
        {!reviews || reviews.length === 0 ? (
          <div className={styles.placeholder}>No reviews yet. Be the first!</div>
        ) : (
          reviews.map((review) => {
            const userObj = review.user as any;
            const authorName = userObj?.username || userObj?.name || 'Anonymous User';

            return (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.header}>
                  <span className={styles.author}>{authorName}</span>
                  {renderStars(review.rate)}
                </div>

                <span className={styles.date}>{formatDate(review.createdAt)}</span>

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
