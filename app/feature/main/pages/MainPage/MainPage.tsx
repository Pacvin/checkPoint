import { Link } from 'react-router';

import GamepadIcon from '~/assets/icons/gamepad.svg';
import { paths } from '~/constants/routing';

import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>
        Welcome to checkPoint
        <img src={GamepadIcon} alt="" className={styles.icon} />
      </h1>
      <p className={styles.description}>Discover and rate games.</p>
      <Link to={paths.catalog} className={styles.link}>
        Go to Catalog
      </Link>
    </div>
  );
}
