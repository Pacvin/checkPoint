import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GameDetails } from '~/feature/game/components/GameDetails/GameDetails';
import { GameHero } from '~/feature/game/components/GameHero/GameHero';
import { GameReviews } from '~/feature/game/components/GameReviews/GameReviews';
import { GameSidebar } from '~/feature/game/components/GameSidebar/GameSidebar';
import { fetchGameById, syncUserWithFirestore } from '~/shared/api/games';
import { Button } from '~/shared/component/Button';
import { Container } from '~/shared/component/Container';
import { PageLoader } from '~/shared/component/PageLoader/PageLoader';
import { paths } from '~/shared/constants/routing';
import type { IGame } from '~/shared/types/game';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<IGame | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const loadGame = useCallback(async () => {
    if (!gameId) return;
    setIsLoading(true);
    try {
      const gameData = await fetchGameById(gameId);
      setGame(gameData);
    } catch (error) {
      console.error('Error loading game:', error);
    } finally {
      setIsLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await syncUserWithFirestore(user);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadGame();
  }, [loadGame]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!game) {
    return (
      <Container>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Game not found</h1>
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
            <GameReviews
              reviews={game.reviews}
              gameId={game.id}
              userId={currentUser?.uid}
              onReviewAdded={loadGame}
            />
          </div>
          <div className={styles.side}>
            <GameSidebar game={game} />
          </div>
        </div>
      </Container>
    </div>
  );
};
