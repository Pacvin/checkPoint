import { Button } from '~/shared/component/Button';
import { Logo } from '~/shared/component/Logo';
import { QUICK_LINKS, SUPPORT_LINKS } from '~/shared/constants/constants';

import { FOOTER_TEXT, LEGAL_LINKS, SOCIAL_LINKS } from './constants';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>

            <p>{FOOTER_TEXT.DESCRIPTION}</p>

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
            <h3 className={styles.title}>{FOOTER_TEXT.QUICK_LINKS_TITLE}</h3>
            {QUICK_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>{FOOTER_TEXT.SUPPORT_TITLE}</h3>
            {SUPPORT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>{FOOTER_TEXT.UPDATE_TITLE}</h3>
            <p>{FOOTER_TEXT.UPDATE_DESCRIPTION}</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder={FOOTER_TEXT.PLACEHOLDER} className={styles.input} />

              <Button size="medium" variant="primary">
                {FOOTER_TEXT.SUBSCRIBE_BTN}
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{FOOTER_TEXT.COPYRIGHT}</span>
          <div className={styles.legal}>
            {LEGAL_LINKS.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
