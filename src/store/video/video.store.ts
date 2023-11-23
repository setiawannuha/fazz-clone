import { reactive, ref } from "vue";

interface IState {
  id: number;
  created_at: string;
  title: string;
  description: string;
  rating: number;
  level: string;
  price: number;
  cover: string;
}

export const state = ref<IState[]>([]);

export const actions = {
  getVideoSuccess: (data: IState[]) => {
    state.value = data;
  },
};
