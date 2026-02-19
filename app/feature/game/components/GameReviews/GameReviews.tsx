import styles from './GameReviews.module.scss';

export const GameReviews = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>User Reviews</h3>
      <div className={styles.list}>
        <div className={styles.placeholder}>Reviews will be displayed here...</div>
      </div>
    </div>
  );
};
