import { defineStore } from "pinia";
import type { IState, IPayload } from "@/stores/auth/interface";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: (): IState => {
    return {
      data: {
        email: "",
        token: "",
      },
    };
  },

  actions: {
    async registerAction({ email, password }: IPayload) {
      return await axios.post(
        "https://fazz-track-sample-api.vercel.app/register",
        {
          email,
          password,
        }
      );
    },

    async loginAction({ email, password }: IPayload) {
      return await axios.post(
        "https://fazz-track-sample-api.vercel.app/login",
        {
          email,
          password,
        }
      );
    },
  },

  getters: {},
});
