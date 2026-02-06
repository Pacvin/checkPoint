import { useState } from 'react';

import StarIcon from '~/assets/icons/star.svg';
import { Container } from '~/shared/component/Container/Container';
import type { IGame } from '~/shared/types/game';

import styles from './BannerSlider.module.scss';

interface Props {
  games: IGame[];
}

export const BannerSlider = ({ games }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const game = games[currentIndex];

  return (
    <section className={styles.slider}>
      <div className={styles.slide}>
        <img src={game.bannerImage} alt={game.title} className={styles.backgroundImage} />
        <div className={styles.gradientOverlay} />

        <Container>
          <div className={styles.content}>
            <span className={styles.badge}>Featured Game</span>
            <h2 className={styles.title}>{game.title}</h2>

            <div className={styles.meta}>
              <div className={styles.rating}>
                <img src={StarIcon} alt="Rating" className={styles.star} />
                <span className={styles.rateValue}>{game.rateAvg}</span>
              </div>
              <div className={styles.genres}>{game.genres.join(' • ')}</div>
            </div>

            <p className={styles.description}>{game.description}</p>

            <button className={styles.button}>View Details</button>
          </div>
        </Container>
      </div>

      <div className={styles.controls}>
        {games.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};
