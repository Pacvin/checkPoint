import { NavLink } from 'react-router';

import CatalogIcon from '~/assets/icons/catalog.svg';
import GamepadIcon from '~/assets/icons/gamepad.svg';
import ProfileIcon from '~/assets/icons/profile.svg';
import { paths } from '~/constants/routing';

import styles from './Header.module.scss';

const NAV_LINKS = [
  {
    to: paths.catalog,
    label: 'Catalog',
    icon: CatalogIcon,
  },
  {
    to: paths.profile,
    label: 'Profile',
    icon: ProfileIcon,
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <NavLink to={paths.home} className={styles.logo} end>
          <img src={GamepadIcon} alt="Logo" className={styles.logoIcon} />
          checkPoint
        </NavLink>

        <input type="text" placeholder="Search games..." className={styles.search} />

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={styles.link}>
              {link.icon && <img src={link.icon} alt="" className={styles.icon} />}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
