import { Link } from 'react-router';

import GamepadIcon from '~/assets/icons/gamepad.svg';
import { paths } from '~/constants/routing';
import { BannerSlider } from '~/feature/main/components/BannerSlider/BannerSlider';
import { Container } from '~/shared/component/Container/Container';
import { MOCK_GAMES } from '~/shared/mock/games';

import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <main className={styles.page}>
      <BannerSlider games={MOCK_GAMES} />

      <section className={styles.welcomeSection}>
        <Container>
          <h1 className={styles.title}>
            Welcome to checkPoint
            <img src={GamepadIcon} alt="" className={styles.icon} />
          </h1>
          <p className={styles.description}>Discover and rate games.</p>
          <Link to={paths.catalog} className={styles.link}>
            Go to Catalog
          </Link>
        </Container>
      </section>
    </main>
  );
}
