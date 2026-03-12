import styles from './MobileMenuBtn.module.scss';

interface MobileMenuBtnProps {
  onClick: () => void;
}

export const MobileMenuBtn = ({ onClick }: MobileMenuBtnProps) => {
  return (
    <button className={styles.button} onClick={onClick} aria-label="Menu">
      <svg viewBox="0 0 24 24" width="1.75rem" height="1.75rem" fill="currentColor">
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    </button>
  );
};
