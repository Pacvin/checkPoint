import { collection, getDocs, query, where, limit, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import type { IGame } from '~/shared/types/game';
import type { IReview } from '~/shared/types/review';
import type { IUser } from '~/shared/types/user';

export const fetchGames = async (): Promise<IGame[]> => {
  try {
    const gamesCollection = collection(db, 'games');
    const gamesSnapshot = await getDocs(gamesCollection);
    return gamesSnapshot.docs.map((doc) => {
      const data = doc.data() as any;
      return {
        ...data,
        id: data.id || doc.id,
      } as IGame;
    });
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
    const gameData = docSnap.data() as any;

    const populatedReviews: IReview[] = [];

    if (gameData.reviews && Array.isArray(gameData.reviews)) {
      for (const reviewRef of gameData.reviews) {
        const reviewSnap = await getDoc(reviewRef);

        if (reviewSnap.exists()) {
          const reviewData = reviewSnap.data() as any;

          let userData: IUser = { id: 'unknown', username: 'Аноним' };

          if (reviewData.users) {
            const userSnap = await getDoc(reviewData.users);
            if (userSnap.exists()) {
              const uData = userSnap.data() as any;
              userData = {
                id: userSnap.id,

                username: uData.nickname || uData.username || 'Аноним',
              };
            }
          }

          let createdAtStr = '';
          if (reviewData.createdAt) {
            createdAtStr =
              typeof reviewData.createdAt.toDate === 'function'
                ? reviewData.createdAt.toDate().toLocaleDateString()
                : String(reviewData.createdAt);
          }

          populatedReviews.push({
            id: reviewSnap.id,
            title: reviewData.title || '',
            message: reviewData.message || '',
            rate: reviewData.rate || 0,
            createdAt: createdAtStr,
            user: userData,
          });
        }
      }
    }

    return {
      ...gameData,
      id: gameData.id || docSnap.id,
      reviews: populatedReviews,
    } as IGame;
  } catch (error) {
    console.error('Error fetching game by id:', error);
    return null;
  }
};
