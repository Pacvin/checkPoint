import type { IGame } from '~/shared/types/game';
import type { IUser } from '~/shared/types/user';

export const MOCK_GAMES: IGame[] = [
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    rateAvg: 4.8,
    genres: ['Action', 'RPG', 'Sci-Fi'],
    description:
      'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
    bannerImage: 'https://games.24tv.ua/resources/photos/news/202507/2871635.jpg?v=1752664657000',
    cover: '',
    features: [
      'Immersive storyline with multiple endings',
      'Advanced combat system with cyberware',
      'Stunning graphics powered by REDengine 4',
      'Open world exploration',
    ],
    reviewCount: 1203,
    screenshots: [
      'https://sim-unlock.net/foto/13_12_27_Cyberpunk_2077.jpg',
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/09/Cyberpunk-2077-Night-City-District-Heywood.jpg?w=1200&h=675&fit=crop',
      'https://www.geekgirlauthority.com/wp-content/uploads/2019/08/CP77_Screenshot_Night_City-1920x1080-1400x788.jpg',
      'https://i.redd.it/ed2r0201jvdd1.jpeg',
    ],
    createdAt: '',
    version: '2.1',
    releaseDate: 'Dec 10, 2020',
    developer: 'CD Projekt Red',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    reviews: [
      {
        id: '1',
        title: 'Masterpiece of an RPG',
        message:
          "Absolutely amazing! Best game I've played this year. The graphics are stunning and the gameplay is incredibly smooth.",
        rate: 5,
        createdAt: 'Dec 20, 2024',
        user: { id: 'u1', username: 'GameMaster99' } as unknown as IUser,
      },
      {
        id: '2',
        title: 'Great, but needs some polish',
        message:
          'Great game overall. The story is engaging and the combat system is well-designed. Could use a bit more side content though.',
        rate: 4,
        createdAt: 'Dec 18, 2024',
        user: { id: 'u2', username: 'ProGamer_XYZ' } as unknown as IUser,
      },
    ],
  },
  {
    id: 'god-of-war-2018',
    title: 'God of War (2018)',
    rateAvg: 4.9,
    genres: ['Action', 'Adventure', 'Hack and Slash'],
    description:
      'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
    bannerImage:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/KAmUQWQ5V9QF3XDzmty1VkKj.png',
    cover: '',
    features: ['Epic boss fights', 'Emotional storytelling', 'Norse mythology'],
    reviewCount: 450,
    screenshots: [
      'https://preview.redd.it/god-of-war-2018-had-me-take-the-most-screenshots-ive-taken-v0-whhkkgn1szsd1.jpeg?auto=webp&s=0915a71f8e3bff1e3829d963207ee823815e37bd',
      'https://cdn.80.lv/api/upload/content/46/5d2c5937f27c5.jpg',
      'https://www.newgamenetwork.com/app/uploads/2025/10/gow_09_2.jpg',
      'https://i.redd.it/3vahlg9ku4w01.jpg',
    ],
    createdAt: '',
    version: '1.0.12',
    releaseDate: 'Apr 20, 2018',
    developer: 'Santa Monica Studio',
    platforms: ['PC', 'PS4', 'PS5'],
    reviews: [
      {
        id: '3',
        title: 'BOY! What an experience.',
        message:
          'The combat is so satisfying and the dynamic between Kratos and Atreus is beautifully written. A true masterpiece from start to finish.',
        rate: 5,
        createdAt: 'Jan 15, 2025',
        user: { id: 'u3', username: 'SpartanRage' } as unknown as IUser,
      },
      {
        id: '4',
        title: 'Incredible world design',
        message:
          'Midgard is gorgeous. The puzzles are just the right difficulty and the Leviathan Axe is the best weapon in gaming history.',
        rate: 5,
        createdAt: 'Jan 10, 2025',
        user: { id: 'u4', username: 'NorseMythNerd' } as unknown as IUser,
      },
    ],
  },
  {
    id: 'the-last-of-us-part-1',
    title: 'The Last of Us Part I',
    rateAvg: 4.7,
    genres: ['Action', 'Adventure', 'Horror'],
    description:
      'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.',
    bannerImage: 'https://i.playground.ru/e/zSokqXYEMT_KzkDabiu4Og.jpeg',
    cover: '',
    features: ['Survival mechanics', 'Gripping narrative', 'Stunning visuals'],
    reviewCount: 380,
    screenshots: [
      'https://s.yimg.com/ny/api/res/1.2/PvQrABklKJjlEW.6kqFOeA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/dcb38c70-28a6-11ed-a77f-d92be29b5fc1',
      'https://www.well-played.com.au/wp-content/uploads/2022/08/The-Last-of-Us-Part-I-screenshot-1.jpg',
      'https://mp1st.com/wp-content/uploads/2022/08/the-last-of-us-part-1-review-MP1st-screenshots-6.png.webp',
      'https://s.yimg.com/ny/api/res/1.2/AZOpu.cYjRr7dJprywE_wg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-08/f65fcc40-28ad-11ed-b397-9627f832def4',
    ],
    createdAt: '',
    version: '1.1',
    releaseDate: 'Sep 2, 2022',
    developer: 'Naughty Dog',
    platforms: ['PC', 'PS4', 'PS5'],
    reviews: [
      {
        id: '5',
        title: 'An emotional rollercoaster',
        message:
          'I played the original, but this remake takes the visual fidelity to a whole new level. The facial expressions add so much weight to the story.',
        rate: 5,
        createdAt: 'Feb 05, 2025',
        user: { id: 'u5', username: 'SurvivorEllie' } as unknown as IUser,
      },
      {
        id: '6',
        title: 'A bit pricey, but worth it',
        message:
          "It's the same great game with a beautiful fresh coat of paint. If you haven't played it yet, this is the definitive way to experience Joel and Ellie's journey.",
        rate: 4,
        createdAt: 'Feb 01, 2025',
        user: { id: 'u6', username: 'ClickerHunter' } as unknown as IUser,
      },
    ],
  },
];
