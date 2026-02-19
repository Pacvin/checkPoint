import { Link } from 'react-router';

import GamepadIcon from '~/assets/icons/gamepad.svg';
import { paths } from '~/constants/routing';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to={paths.home} className={styles.logo}>
      <img src={GamepadIcon} alt="checkPoint Logo" className={styles.icon} />
      checkPoint
    </Link>
  );
};
