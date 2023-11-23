import { reactive, ref } from "vue";

interface IState {
  id: number;
  created_at: string;
  title: string;
  description: string;
  trainerName: number;
  trainerTitle: string;
  trainerPicture: string;
  batch: number;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}

export const state = ref<IState[]>([]);

export const actions = {
  getMinicampSuccess: (data: IState[]) => {
    state.value = data;
  },
};
