import { reactive } from "vue";

interface IProfileState {
  data: {
    id: number;
    email: string;
  };
}

export const state = reactive<IProfileState>({
  data: {
    id:0,
    email: "",
  },
});

export const actions = {
  profileFulfilled: (data: IProfileState) => {
    state.data = data.data;
  },
};
