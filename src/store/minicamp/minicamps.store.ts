import { reactive } from "vue";

interface IMinicamps {
  id: number;
  created_at: string;
  title: string;
  description: string;
  trainerName: string;
  trainerTitle: string;
  trainerPicture: string;
  batch: string;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}

interface IState {
  list: IMinicamps[];
  detail: IMinicamps;
}

export const state = reactive<IState>({
  list: [],
  detail: {
    id: 0,
    created_at: "",
    title: "",
    description: "",
    trainerName: "",
    trainerTitle: "",
    trainerPicture: "",
    batch: "",
    location: "",
    startDate: "",
    endDate: "",
    isWork: false,
    price: 0,
  },
});

export const actions = {
  getMinicampSuccess: (data: IMinicamps[]) => {
    state.list = data;
  },
  getDetailMinicampsSuccess: (data: IMinicamps) => {
    state.detail = data;
  },
};
