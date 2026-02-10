import FacebookIcon from '~/assets/icons/facebook.svg';
import InstagramIcon from '~/assets/icons/inst.svg';
import TwitterIcon from '~/assets/icons/twitter.svg';
import YoutubeIcon from '~/assets/icons/youtube.svg';

export const FOOTER_TEXT = {
  LOGO: 'checkPoint',
  DESCRIPTION:
    'Your ultimate destination for rating and discovering the best games across all platforms.',
  QUICK_LINKS_TITLE: 'Quick Links',
  SUPPORT_TITLE: 'Support',
  UPDATE_TITLE: 'Stay Updated',
  UPDATE_DESCRIPTION: 'Subscribe to get the latest game reviews and ratings.',
  PLACEHOLDER: 'Your email',
  SUBSCRIBE_BTN: 'Subscribe',
  COPYRIGHT: `© ${new Date().getFullYear()} checkPoint. All rights reserved.`,
};

export const SOCIAL_LINKS = [
  { icon: FacebookIcon, alt: 'Facebook', href: 'https://facebook.com' },
  { icon: TwitterIcon, alt: 'Twitter', href: 'https://twitter.com' },
  { icon: InstagramIcon, alt: 'Instagram', href: 'https://instagram.com' },
  { icon: YoutubeIcon, alt: 'YouTube', href: 'https://youtube.com' },
];

export const LEGAL_LINKS = ['Cookies', 'Legal', 'Sitemap'];
