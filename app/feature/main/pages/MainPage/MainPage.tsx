import { BannerSlider } from '~/feature/main/components/BannerSlider';
import { GameCardSlider } from '~/feature/main/components/GameCardSlider';
import { Container } from '~/shared/component/Container';
import { useGames } from '~/feature/main/hooks/useGames';
import { PageLoader } from '~/shared/component/PageLoader/PageLoader';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { games, isLoading } = useGames();

  if (isLoading) {
    return <PageLoader />;
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
