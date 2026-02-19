import StarIcon from '~/assets/icons/star.svg';
import { paths } from '~/constants/routing';
import { Button } from '~/shared/component/Button';
import type { IGame } from '~/shared/types/game';

import styles from './GameHero.module.scss';

interface GameHeroProps {
  game: IGame;
}

export const GameHero = ({ game }: GameHeroProps) => {
  return (
    <section className={styles.hero}>
      <img src={game.bannerImage} alt={game.title} className={styles.image} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.navigation}>
          <Button to={paths.home} variant="outline" size="small">
            Back to Home
          </Button>
        </div>

        <h1 className={styles.title}>{game.title}</h1>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <img src={StarIcon} alt="star" className={styles.starIcon} />
            <span className={styles.rateValue}>{game.rateAvg}</span>
            <span className={styles.reviewCount}>({game.reviewCount} reviews)</span>
          </div>
          <div className={styles.genres}>
            {game.genres.map((genre) => (
              <span key={genre} className={styles.genreTag}>
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
