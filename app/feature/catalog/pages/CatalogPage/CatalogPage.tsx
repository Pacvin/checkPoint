import { Link } from 'react-router';

export default function CatalogPage() {
  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        <li>
          <Link to="/game/cyberpunk-2077">Cyberpunk 2077</Link>
        </li>
        <li>
          <Link to="/game/witcher-3">The Witcher 3</Link>
        </li>
      </ul>
    </div>
  );
}