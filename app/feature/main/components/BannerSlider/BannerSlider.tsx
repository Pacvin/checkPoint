import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!games || games.length === 0) return null;

  return (
    <section className={styles.wrapper}>
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

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {games.map((game) => (
            <div key={game.id} className={styles.slide}>
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
          ))}
        </div>
      </div>
    </section>
  );
};
