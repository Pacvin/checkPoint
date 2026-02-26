import { useParams } from 'react-router-dom';

import { GameDetails } from '~/feature/game/components/GameDetails/GameDetails';
import { GameHero } from '~/feature/game/components/GameHero/GameHero';
import { GameReviews } from '~/feature/game/components/GameReviews/GameReviews';
import { GameSidebar } from '~/feature/game/components/GameSidebar/GameSidebar';
import { Button } from '~/shared/component/Button';
import { Container } from '~/shared/component/Container';
import { paths } from '~/shared/constants/routing';
import { MOCK_GAMES } from '~/shared/mock/games';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = MOCK_GAMES.find((g) => g.id === gameId);

  if (!game) {
    return (
      <Container>
        <div className={styles.notFound}>
          <h1 className={styles.title}>Game not found</h1>
          <Button to={paths.home} variant="primary" size="medium">
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div className={styles.page}>
      <Container>
        <GameHero game={game} />
        <div className={styles.layout}>
          <div className={styles.main}>
            <GameDetails game={game} />

            <GameReviews reviews={game.reviews} />
          </div>
          <div className={styles.side}>
            <GameSidebar game={game} />
          </div>
        </div>
      </Container>
    </div>
  );
};
