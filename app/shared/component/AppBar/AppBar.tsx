import { NavLink } from 'react-router';

import { paths } from '../../../routing';
import styles from './AppBar.module.scss';

export function AppBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to={paths.home}
          end
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to={paths.catalog}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
