import type { IReview } from '~/shared/types/review';

export interface IGame {
  id: string;
  title: string;
  cover: string;
  description: string;
  rateAvg: number;
  features: string[];
  reviewCount: number;
  screenshots: string[];
  createdAt: string;
  version: string;
  releaseDate: string;
  developer: string;
  platforms: string[];
  reviews: IReview[];
}
