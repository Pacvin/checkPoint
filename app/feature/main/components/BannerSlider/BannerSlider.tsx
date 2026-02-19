import { useState } from 'react';

import StarIcon from '~/assets/icons/star.svg';
import { paths } from '~/constants/routing';
import { Button } from '~/shared/component/Button';
import { Container } from '~/shared/component/Container';
import type { IGame } from '~/shared/types/game';

import styles from './BannerSlider.module.scss';
import {
  FEATURED_LABEL,
  GENRE_SEPARATOR,
  NEXT_SLIDE_ARIA,
  PREV_SLIDE_ARIA,
  VIEW_DETAILS_LABEL,
} from './constants';

interface Props {
  games: IGame[];
}

export const BannerSlider = ({ games }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const game = games[currentIndex];

  if (!game) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.slider}>
      <button
        className={`${styles.arrow} ${styles.prev}`}
        onClick={handlePrev}
        aria-label={PREV_SLIDE_ARIA}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        className={`${styles.arrow} ${styles.next}`}
        onClick={handleNext}
        aria-label={NEXT_SLIDE_ARIA}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className={styles.slide}>
        <img src={game.bannerImage} alt={game.title} className={styles.backgroundImage} />
        <div className={styles.gradientOverlay} />

        <Container>
          <div className={styles.content}>
            <span className={styles.badge}>{FEATURED_LABEL}</span>
            <h2 className={styles.title}>{game.title}</h2>

            <div className={styles.meta}>
              <div className={styles.rating}>
                <img src={StarIcon} alt="Rating" className={styles.star} />
                <span className={styles.rateValue}>{game.rateAvg}</span>
              </div>
              <div className={styles.genres}>{game.genres.join(GENRE_SEPARATOR)}</div>
            </div>

            <p className={styles.description}>{game.description}</p>

            <Button to={`${paths.game}/${game.id}`} variant="primary" size="medium">
              {VIEW_DETAILS_LABEL}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};
