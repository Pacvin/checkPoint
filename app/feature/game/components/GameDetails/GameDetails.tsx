import type { IGame } from '~/shared/types/game';

import styles from './GameDetails.module.scss';

interface GameDetailsProps {
  game: IGame;
}

export const GameDetails = ({ game }: GameDetailsProps) => {
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
          <h3 className={styles.heading}>Screenshots</h3>
          <div className={styles.grid}>
            {game.screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                className={styles.screenshot}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
