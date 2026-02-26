import { Link } from 'react-router';

import GamepadIcon from '~/assets/icons/gamepad.svg';
import { BannerSlider } from '~/feature/main/components/BannerSlider';
import { GameCardSlider } from '~/feature/main/components/GameCardSlider';
import { Container } from '~/shared/component/Container';
import { paths } from '~/shared/constants/routing';
import { MOCK_GAMES } from '~/shared/mock/games';

import { CATALOG_LINK_LABEL, MAIN_DESCRIPTION, MAIN_TITLE } from './constants';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <BannerSlider games={MOCK_GAMES} />
      <section className={styles.welcomeSection}>
        <Container>
          <h1 className={styles.title}>
            {MAIN_TITLE}
            <img src={GamepadIcon} alt="" className={styles.icon} />
          </h1>
          <p className={styles.description}>{MAIN_DESCRIPTION}</p>
          <Link to={paths.catalog} className={styles.link}>
            {CATALOG_LINK_LABEL}
          </Link>

          <GameCardSlider games={MOCK_GAMES} title="Popular Games" />
        </Container>
      </section>
    </main>
  );
};
