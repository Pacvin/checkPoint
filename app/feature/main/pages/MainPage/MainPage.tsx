import { useEffect, useState } from 'react';
import { BannerSlider } from '~/feature/main/components/BannerSlider';
import { GameCardSlider } from '~/feature/main/components/GameCardSlider';
import { Container } from '~/shared/component/Container';

import { fetchGames } from '~/shared/api/games';
import type { IGame } from '~/shared/types/game';

import styles from './MainPage.module.scss';

export const MainPage = () => {
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
    return (
      <main className={styles.page}>
        <Container>
          <div style={{ padding: '100px 0', textAlign: 'center', color: 'white' }}>
            <h2>Loading games from Firebase... ⏳</h2>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <BannerSlider games={games} />
      <section className={styles.contentSection}>
        <Container>
          <GameCardSlider games={games} title="Popular Games" />
        </Container>
      </section>
    </main>
  );
};
