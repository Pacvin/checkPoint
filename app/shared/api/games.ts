import {
  collection,
  getDocs,
  query,
  where,
  limit,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase';
import type { IGame } from '~/shared/types/game';
import type { IReview } from '~/shared/types/review';
import type { IUser } from '~/shared/types/user';

export const syncUserWithFirestore = async (user: any) => {
  if (!user) return;
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        id: user.uid,

        username: user.displayName || 'User_' + user.uid.slice(0, 5),
        email: user.email,
        createdAt: serverTimestamp(),
      });
    }
  } catch (e) {
    console.error('Ошибка синхронизации юзера:', e);
  }
};

export const fetchGames = async (): Promise<IGame[]> => {
  try {
    const gamesCollection = collection(db, 'games');
    const gamesSnapshot = await getDocs(gamesCollection);
    return gamesSnapshot.docs.map((doc) => {
      const data = doc.data() as any;
      return { ...data, id: data.id || doc.id } as IGame;
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
                username: uData.username || uData.displayName || 'Аноним',
              };
            }
          }

          let createdAtStr = reviewData.createdAt?.toDate
            ? reviewData.createdAt.toDate().toLocaleDateString()
            : String(reviewData.createdAt || '');

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

export const addReview = async (
  gameId: string,
  userId: string,
  reviewData: { title: string; message: string; rate: number },
) => {
  try {
    const reviewsCollection = collection(db, 'reviews');
    const newReviewRef = await addDoc(reviewsCollection, {
      title: reviewData.title,
      message: reviewData.message,
      rate: reviewData.rate,
      createdAt: serverTimestamp(),
      users: doc(db, 'users', userId),
    });

    const gamesRef = collection(db, 'games');
    const q = query(gamesRef, where('id', '==', gameId), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const gameDocRef = querySnapshot.docs[0].ref;
      await updateDoc(gameDocRef, {
        reviews: arrayUnion(newReviewRef),
      });
    }
    return newReviewRef.id;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};
