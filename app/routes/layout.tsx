import { Outlet } from 'react-router';

import { Footer } from '~/shared/component/Footer/Footer';
import { Header } from '~/shared/component/Header/Header';

import styles from './layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
