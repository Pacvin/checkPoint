import { useParams } from 'react-router';

import { Container } from '~/shared/component/Container';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();

  return (
    <div className={styles.gamePage}>
      <Container>
        <h1 className={styles.title}>Game Details</h1>
        <p className={styles.info}>Game ID: {gameId}</p>
      </Container>
    </div>
  );
};
