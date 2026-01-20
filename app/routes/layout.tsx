import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <section>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </section>
  );
}
