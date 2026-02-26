import CatalogIcon from '~/assets/icons/catalog.svg';
import ProfileIcon from '~/assets/icons/profile.svg';
import { paths } from '~/shared/constants/routing';

export const HEADER_TEXT = {
  LOGO: 'checkPoint',
  SEARCH_PLACEHOLDER: 'Search games...',
};

export const NAV_LINKS = [
  {
    to: paths.catalog,
    label: 'Catalog',
    icon: CatalogIcon,
  },
  {
    to: paths.profile,
    label: 'Profile',
    icon: ProfileIcon,
  },
];
