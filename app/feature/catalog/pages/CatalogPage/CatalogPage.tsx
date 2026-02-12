import { Link } from 'react-router';

import { Container } from '~/shared/component/Container';

import styles from './CatalogPage.module.scss';
import { CATALOG_LINKS } from './constants';

export const CatalogPage = () => {
  return (
    <div className={styles.catalogPage}>
      <Container>
        <h1 className={styles.title}>Catalog</h1>
        <ul className={styles.list}>
          {CATALOG_LINKS.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className={styles.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
