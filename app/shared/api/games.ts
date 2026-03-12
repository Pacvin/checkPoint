import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from './firebase';
import type { IGame } from '~/shared/types/game';

export const fetchGames = async (): Promise<IGame[]> => {
  try {
    const gamesCollection = collection(db, 'games');
    const gamesSnapshot = await getDocs(gamesCollection);
    return gamesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.data().id || doc.id,
    })) as IGame[];
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export const fetchGameById = async (gameId: string): Promise<IGame | null> => {
  try {
    const gamesRef = collection(db, 'games');
    const q = query(gamesRef, where('id', '==', gameId), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const docSnap = querySnapshot.docs[0];
    return { ...docSnap.data() } as IGame;
  } catch (error) {
    console.error('Error fetching game by id:', error);
    return null;
  }
};
