import { reactive } from "vue";

interface IState {
  data: {
    email: string;
    token: string;
  };
}

export const state = reactive<IState>({
  data: {
    email: "",
    token: "",
  },
});

export const actions = {
  loginFulfiled: (data: IState) => {
    state.data = data.data;
  },
};
