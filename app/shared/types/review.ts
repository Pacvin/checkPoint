import type { IUser } from '~/shared/types/user';

export interface IReview {
  id: string;
  title: string;
  message: string;
  rate: number;
  createdAt: string;
  user: IUser;
}
