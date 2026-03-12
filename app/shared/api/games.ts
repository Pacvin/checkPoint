import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import type { IGame } from '~/shared/types/game';

export const fetchGames = async (): Promise<IGame[]> => {
  try {
    const gamesCollection = collection(db, 'games');
    const gamesSnapshot = await getDocs(gamesCollection);

    return gamesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IGame[];
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};
