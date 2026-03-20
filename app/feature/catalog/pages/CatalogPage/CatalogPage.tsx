import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true);
      const data = await fetchGames();
      setGames(data);
      setIsLoading(false);
    };

    loadGames();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={styles.catalogPage}>
      <Container>
        <h1 className={styles.title}>Catalog</h1>

        <ul className={styles.list}>
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`${paths.game}/${game.id}`} className={styles.link}>
                {game.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
