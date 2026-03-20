import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '~/shared/component/Container';
import { PageLoader } from '~/shared/component/PageLoader/PageLoader';
import { paths } from '~/shared/constants/routing';

import { fetchGames } from '~/shared/api/games';
import type { IGame } from '~/shared/types/game';

import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadGames = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchGames();
      setGames(data);
    } catch (error) {
      console.error('Failed to fetch games:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.catalogPage}>
      <Container>
        <h1 className={styles.title}>Catalog</h1>

        <ul className={styles.list}>
          {games.length > 0 ? (
            games.map((game) => (
              <li key={game.id} className={styles.item}>
                <Link to={`${paths.game}/${game.id}`} className={styles.link}>
                  {game.title}
                </Link>
              </li>
            ))
          ) : (
            <p className={styles.empty}>No games found in the catalog.</p>
          )}
        </ul>
      </Container>
    </div>
  );
};
