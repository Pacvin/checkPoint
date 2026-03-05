import { BannerSlider } from '~/feature/main/components/BannerSlider';
import { GameCardSlider } from '~/feature/main/components/GameCardSlider';
import { Container } from '~/shared/component/Container';
import { MOCK_GAMES } from '~/shared/mock/games';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <BannerSlider games={MOCK_GAMES} />
      <section className={styles.contentSection}>
        <Container>
          <GameCardSlider games={MOCK_GAMES} title="Popular Games" />
        </Container>
      </section>
    </main>
  );
};
