import { NavLink } from 'react-router';

import { Logo } from '~/shared/component/Logo';

import { HEADER_TEXT, NAV_LINKS } from './constants';
import { useMobileMenu } from '~/shared/component/MobileMenuBtn/useMobileMenu';
import { MobileMenuBtn } from '~/shared/component/MobileMenuBtn/MobileMenuBtn';
import styles from './Header.module.scss';

export const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <input type="text" placeholder={HEADER_TEXT.SEARCH_PLACEHOLDER} className={styles.search} />

        <MobileMenuBtn onClick={toggleMenu} />

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
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
