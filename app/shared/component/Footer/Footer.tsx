import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <span style={{ color: 'var(--color-accent)' }}>🎮</span> GameRate
            </div>
            <p>
              Your ultimate destination for rating and discovering the best games across all
              platforms.
            </p>
            <div className={styles.socials}>
              <div className={styles.socials}>
                <div className={styles.socialIcon}>f</div>
                <div className={styles.socialIcon}>tw</div>
                <div className={styles.socialIcon}>in</div>
                <div className={styles.socialIcon}>yt</div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Quick Links</h3>
            <a href="#">Browse Games</a>
            <a href="#">Top Rated</a>
            <a href="#">New Releases</a>
            <a href="#">Trending</a>
          </div>

          <div className={styles.column}>
            <h3>Support</h3>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className={styles.column}>
            <h3>Stay Updated</h3>
            <p>Subscribe to get the latest game reviews and ratings.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; 2026 GameRate. All rights reserved.</span>
          <div className={styles.links}>
            <span>Cookies</span>
            <span>Legal</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
