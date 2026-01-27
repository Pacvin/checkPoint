import { Outlet } from 'react-router';

import { Footer } from '~/shared/component/Footer/Footer';
import { Header } from '~/shared/component/Header/Header';

export default function Layout() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-main)',
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '2rem 0',
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </section>
  );
}
