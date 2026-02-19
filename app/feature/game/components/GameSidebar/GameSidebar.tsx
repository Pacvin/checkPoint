import { Button } from '~/shared/component/Button';
import type { IGame } from '~/shared/types/game';

import styles from './GameSidebar.module.scss';

interface GameSidebarProps {
  game: IGame;
}

export const GameSidebar = ({ game }: GameSidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <div className={styles.action}>
          <Button variant="primary" size="medium" className={styles.button}>
            Rate This Game
          </Button>
        </div>

        <div className={styles.infoRow}>
          <h4 className={styles.label}>Release Date</h4>
          <p className={styles.value}>{game.releaseDate || 'TBA'}</p>
        </div>

        <div className={styles.infoRow}>
          <h4 className={styles.label}>Developer</h4>
          <p className={styles.value}>{game.developer || 'Unknown'}</p>
        </div>

        <div className={styles.infoRow}>
          <h4 className={styles.label}>Platforms</h4>
          <div className={styles.platforms}>
            {game.platforms?.map((platform) => (
              <span key={platform} className={styles.platformBadge}>
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
