import FacebookIcon from '../../../assets/icons/facebook.svg';
import GamepadIcon from '../../../assets/icons/gamepad.svg';
import InstagramIcon from '../../../assets/icons/inst.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import YoutubeIcon from '../../../assets/icons/youtube.svg';
import { QUICK_LINKS, SUPPORT_LINKS } from '../../../constants/constants';
import styles from './Footer.module.scss';

const SOCIAL_LINKS = [
  { icon: FacebookIcon, alt: 'Facebook', href: 'https://facebook.com' },
  { icon: TwitterIcon, alt: 'Twitter', href: 'https://twitter.com' },
  { icon: InstagramIcon, alt: 'Instagram', href: 'https://instagram.com' },
  { icon: YoutubeIcon, alt: 'YouTube', href: 'https://youtube.com' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <img src={GamepadIcon} alt="Logo" />
              checkPoint
            </div>
            <p>
              Your ultimate destination for rating and discovering the best games across all
              platforms.
            </p>

            <div className={styles.socials}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialIcon}
                >
                  <img src={social.icon} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            {QUICK_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Support</h3>
            {SUPPORT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Stay Updated</h3>
            <p>Subscribe to get the latest game reviews and ratings.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Your email" className={styles.input} />
              <button className={styles.button}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; 2026 GameRate. All rights reserved.</span>
          <div className={styles.legal}>
            <span>Cookies</span>
            <span>Legal</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
