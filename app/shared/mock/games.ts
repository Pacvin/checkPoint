import type { IGame } from '~/shared/types/game';

export const MOCK_GAMES: IGame[] = [
  {
    id: '1',
    title: 'Cyberpunk Legends',
    rateAvg: 4.8,
    genres: ['Action', 'RPG', 'Sci-Fi'],
    description:
      'Dive into a dystopian future where technology and humanity collide. Make choices that matter and shape the destiny of the city.',
    bannerImage:
      'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=1000&auto=format&fit=crop',
    cover: '',
    features: [],
    reviewCount: 120,
    screenshots: [],
    createdAt: '',
    version: '1.0',
    releaseDate: '2024',
    developer: 'CD Project',
    platforms: ['PC', 'PS5'],
    reviews: [],
  },
  {
    id: '2',
    title: 'God of War (2018)',
    rateAvg: 4.9,
    genres: ['Action', 'Adventure', 'Hack and Slash'],
    description:
      'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.',
    bannerImage:
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1000&auto=format&fit=crop',
    cover: '',
    features: [],
    reviewCount: 450,
    screenshots: [],
    createdAt: '',
    version: '1.0.12',
    releaseDate: '2018',
    developer: 'Santa Monica Studio',
    platforms: ['PC', 'PS4', 'PS5'],
    reviews: [],
  },
  {
    id: '3',
    title: 'The Last of Us Part I',
    rateAvg: 4.7,
    genres: ['Action', 'Adventure', 'Horror'],
    description:
      'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie.',
    bannerImage:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop',
    cover: '',
    features: [],
    reviewCount: 380,
    screenshots: [],
    createdAt: '',
    version: '1.1',
    releaseDate: '2022',
    developer: 'Naughty Dog',
    platforms: ['PC', 'PS4', 'PS5'],
    reviews: [],
  },
];
