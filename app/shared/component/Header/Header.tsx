import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';

import { Logo } from '~/shared/component/Logo';
import { MobileMenuBtn } from '~/shared/component/MobileMenuBtn/MobileMenuBtn';
import { useMobileMenu } from '~/shared/component/MobileMenuBtn/useMobileMenu';

import { auth, googleProvider } from '~/shared/api/firebase';

import { HEADER_TEXT, NAV_LINKS } from './constants';
import styles from './Header.module.scss';

export const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [user, setUser] = useState<User | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setImageError(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <input type="text" placeholder={HEADER_TEXT.SEARCH_PLACEHOLDER} className={styles.search} />

        <MobileMenuBtn onClick={toggleMenu} />

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => {
            if (link.label === 'Profile' && !user) return null;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? `${styles.link} active` : styles.link)}
              >
                {link.icon && <img src={link.icon} alt="" className={styles.icon} />}
                {link.label}
              </NavLink>
            );
          })}

          {user ? (
            <div className={styles.userInfo}>
              {user.photoURL && !imageError ? (
                <img
                  src={user.photoURL}
                  alt="user avatar"
                  className={styles.avatar}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className={styles.defaultAvatar}>
                  <svg
                    className={styles.defaultAvatarIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
              <button onClick={handleSignOut} className={styles.logoutBtn}>
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={handleSignIn} className={styles.loginBtn}>
              Sign In with Google
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
