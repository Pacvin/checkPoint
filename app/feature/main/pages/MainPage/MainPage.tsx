import { BannerSlider } from '~/feature/main/components/BannerSlider';
import { GameCardSlider } from '~/feature/main/components/GameCardSlider';
import { Container } from '~/shared/component/Container';
import { useGames } from '~/feature/main/hooks/useGames';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { games, isLoading } = useGames();

  if (isLoading) {
    return (
      <main className={styles.page}>
        <Container>
          <div className={styles.loadingWrapper}>
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
