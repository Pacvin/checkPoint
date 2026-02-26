import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { Link } from 'react-router';

import { paths } from '~/shared/constants/routing';
import type { IGame } from '~/shared/types/game';

import styles from './GameCardSlider.module.scss';

interface GameCardSliderProps {
  games: IGame[];
  title: string;
}

export const GameCardSlider = ({ games, title }: GameCardSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!games || games.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.bullet}></span>
          {title}
        </h2>
        <Link to={paths.catalog} className={styles.seeAll}>
          See All &raquo;
        </Link>
      </div>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.arrow} ${styles.prev}`} onClick={scrollPrev}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {games.map((game) => (
              <Link to={`${paths.game}/${game.id}`} key={game.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={game.bannerImage} alt={game.title} className={styles.image} />
                  <div className={styles.rating}>{game.rateAvg}</div>
                </div>
                <div className={styles.info}>
                  <span className={styles.genre}>{game.genres[0]}</span>
                  <h3 className={styles.gameTitle}>{game.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.next}`} onClick={scrollNext}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};
