import { NavLink } from 'react-router';

export function AppBar() {
  return (
    <header
      style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}
    >
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
