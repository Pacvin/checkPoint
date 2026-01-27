import { Link } from 'react-router';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          <span style={{ color: 'var(--color-accent)' }}>🎮</span> GameRate
        </Link>

        <input type="text" placeholder="Search games..." className={styles.search} />

        <nav className={styles.nav}>
          <Link to="/catalog" className={styles.link}>
            Catalog
          </Link>
          <Link to="/profile" className={styles.link}>
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};
