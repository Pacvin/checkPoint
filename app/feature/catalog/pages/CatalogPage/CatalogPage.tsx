import { Link } from 'react-router';

import { paths } from '~/constants/routing';
import { Container } from '~/shared/component/Container/Container';

import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  return (
    <div className={styles.catalogPage}>
      <Container>
        <h1 className={styles.title}>Catalog</h1>
        <ul className={styles.list}>
          <li>
            <Link to={`${paths.game}/cyberpunk-legends`} className={styles.link}>
              Cyberpunk Legends
            </Link>
          </li>
          <li>
            <Link to={`${paths.game}/god-of-war-2018`} className={styles.link}>
              God of War (2018)
            </Link>
          </li>
          <li>
            <Link to={`${paths.game}/the-last-of-us-part-1`} className={styles.link}>
              The Last of Us Part I
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default CatalogPage;
