import { Container } from '~/shared/component/Container';
import { Loader } from '~/feature/catalog/components/Loader/Loader';
import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.loadingWrapper}>
          <Loader />
        </div>
      </Container>
    </main>
  );
};
