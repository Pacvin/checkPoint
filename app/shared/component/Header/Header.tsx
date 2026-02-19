import { NavLink } from 'react-router';

import { Logo } from '~/shared/component/Logo';

import { HEADER_TEXT, NAV_LINKS } from './constants';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <input type="text" placeholder={HEADER_TEXT.SEARCH_PLACEHOLDER} className={styles.search} />

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? `${styles.link} active` : styles.link)}
            >
              {link.icon && <img src={link.icon} alt="" className={styles.icon} />}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
