import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '~/shared/component/Container';
import { paths } from '~/shared/constants/routing';

import { fetchGames } from '~/shared/api/games';
import type { IGame } from '~/shared/types/game';

import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true);
      const data = await fetchGames();
      setGames(data);
      setIsLoading(false);
    };

    loadGames();
  }, []);

  return (
    <div className={styles.catalogPage}>
      <Container>
        <h1 className={styles.title}>Catalog</h1>

        {isLoading ? (
          <p style={{ color: 'var(--color-text-primary)' }}>Loading games...</p>
        ) : (
          <ul className={styles.list}>
            {games.map((game) => (
              <li key={game.id}>
                <Link to={`${paths.game}/${game.id}`} className={styles.link}>
                  {game.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
};
