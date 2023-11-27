export interface Video {
  id: number;
  created_at: string;
  title: string;
  description: string;
  rating: number;
  level: string;
  price: number;
  cover: string;
}

export interface IState {
  list: Video[];
  detail: Video;
  isLoading: boolean;
}

export interface IPayload {
  title: string;
  description: string;
  rating: number;
  level: string;
  price: number;
  cover: string;
}
