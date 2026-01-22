import { Outlet } from 'react-router';

import { AppBar } from '~/shared/component/AppBar';

export default function Layout() {
  return (
    <section>
      <AppBar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <footer style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #eee' }}>
        &copy; 2026 CheckPoint. All rights reserved.
      </footer>
    </section>
  );
}
