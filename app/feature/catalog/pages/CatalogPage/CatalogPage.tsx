import { Link } from 'react-router';

import { paths } from '~/constants/routing';

export default function CatalogPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Catalog</h1>
      <ul>
        <li>
          <Link to={`${paths.game}/cyberpunk-2077`}>Cyberpunk 2077</Link>
        </li>
        <li>
          <Link to={`${paths.game}/witcher-3`}>The Witcher 3</Link>
        </li>
      </ul>
    </div>
  );
}
