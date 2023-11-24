import { reactive } from "vue";

interface Video {
  id: number;
  created_at: string;
  title: string;
  description: string;
  rating: number;
  level: string;
  price: number;
  cover: string;
}

interface IState {
  list: Video[];
  detail: Video;
}

export const state = reactive<IState>({
  list: [],
  detail: {
    id: 0,
    created_at: "",
    title: "",
    description: "",
    cover: "",
    rating: 0,
    level: "",
    price: 0,
  },
});

export const actions = {
  getVideoSuccess: (data: Video[]) => {
    state.list = data;
  },
  getDetailVideoSuccess: (data: Video) => {
    state.detail = data;
  },
};
