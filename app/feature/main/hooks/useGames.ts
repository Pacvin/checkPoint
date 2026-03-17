import { useEffect, useState } from 'react';
import { fetchGames } from '~/shared/api/games';
import type { IGame } from '~/shared/types/game';

export const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true);
      const data = await fetchGames();
      setGames(data);
      setIsLoading(false);
    };

    loadGames();
  }, []);

  return { games, isLoading };
};
