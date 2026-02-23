import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

import type { IGame } from '~/shared/types/game';

import styles from './GameDetails.module.scss';

interface GameDetailsProps {
  game: IGame;
}

export const GameDetails = ({ game }: GameDetailsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.container}>
      <p className={styles.description}>{game.description}</p>

      {game.features && game.features.length > 0 && (
        <div className={styles.block}>
          <h3 className={styles.heading}>Key Features</h3>
          <ul className={styles.featureList}>
            {game.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {game.screenshots && game.screenshots.length > 0 && (
        <div className={styles.block}>
          <div className={styles.headerRow}>
            <h3 className={styles.heading}>Screenshots</h3>

            <div className={styles.controls}>
              <button
                className={styles.arrow}
                onClick={scrollPrev}
                aria-label="Previous screenshots"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className={styles.arrow} onClick={scrollNext} aria-label="Next screenshots">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {game.screenshots.map((src, index) => (
                <div key={index} className={styles.emblaSlide}>
                  <img src={src} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
