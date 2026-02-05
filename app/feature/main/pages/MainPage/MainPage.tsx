import { Link } from 'react-router';

import GamepadIcon from '~/assets/icons/gamepad.svg';
import { paths } from '~/constants/routing';
import { Container } from '~/shared/component/Container/Container';
import type { IGame } from '~/shared/types/game';

import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import styles from './MainPage.module.scss';

const MOCK_GAMES: IGame[] = [
  {
    id: '1',
    title: 'Cyberpunk Legends',
    rateAvg: 4.8,
    genres: ['Action', 'RPG', 'Sci-Fi'],
    description:
      'Dive into a dystopian future where technology and humanity collide. Make choices that matter and shape the destiny of the city.',
    bannerImage:
      'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=1000&auto=format&fit=crop',
    cover: '',
    features: [],
    reviewCount: 120,
    screenshots: [],
    createdAt: '',
    version: '1.0',
    releaseDate: '2024',
    developer: 'CD Project',
    platforms: ['PC', 'PS5'],
    reviews: [],
  },
  {
    id: '2',
    title: 'Space Odyssey',
    rateAvg: 4.5,
    genres: ['Adventure', 'Simulation'],
    description:
      'Explore distant galaxies, discover new life forms and build your own interstellar empire in this vast space sandbox.',
    bannerImage:
      'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=1000&auto=format&fit=crop',
    cover: '',
    features: [],
    reviewCount: 85,
    screenshots: [],
    createdAt: '',
    version: '1.2',
    releaseDate: '2023',
    developer: 'Orbit Games',
    platforms: ['PC', 'Xbox'],
    reviews: [],
  },
];

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
