import { defineStore } from "pinia";
import type { IProfileState } from "./interface";
import axios from "axios";
const token = localStorage.getItem("token");

export const useProfileStore = defineStore("profile", {
  state: (): IProfileState => {
    return {
      detail: {
        data: null,
        isError: false,
        isLoading: false,
      },
    };
  },

  actions: {
    async getMyProfile() {
      try {
        this.detail.isLoading = true;
        const { data } = await axios.get(
          "https://fazz-track-sample-api.vercel.app/profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        this.detail.data = data.data;
      } catch (error) {
        this.detail.isError = true;
      } finally {
        this.detail.isLoading = false;
      }
    },
  },
});
