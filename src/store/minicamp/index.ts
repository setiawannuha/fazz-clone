import { defineStore } from "pinia";
import type { IMinicamp, IMinicampState } from "./interface";
import axios from "axios";
const token = localStorage.getItem("token");

export const useMinicampStore = defineStore("minicamp", {
  state: (): IMinicampState => {
    return {
      list: {
        data: [],
        isError: false,
        isLoading: false,
      },
      detail: {
        data: null,
        isError: false,
        isLoading: false,
      },
    };
  },

  actions: {
    async getAll() {
      try {
        this.list.isLoading = true;
        const { data } = await axios.get(
          "https://fazz-track-sample-api.vercel.app/minicamp",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        this.list.data = data.data;
      } catch (error) {
        this.list.isError = true;
      } finally {
        this.list.isLoading = false;
      }
    },
    async getDetail(minicampId: string) {
      const { data } = await axios.get(
        "https://fazz-track-sample-api.vercel.app/minicamp/" + minicampId,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      this.detail.data = data.data;
    },
    async create(payload: IMinicamp) {
      return await axios.post(
        "https://fazz-track-sample-api.vercel.app/minicamp",
        payload,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    },
    async delete(minicampId: string) {
      return await axios.delete(
        "https://fazz-track-sample-api.vercel.app/minicamp/" + minicampId,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    },
    async update(id: string, payload: IMinicamp) {
      console.log("isi", id, payload);
      return await axios.put(
        "https://fazz-track-sample-api.vercel.app/minicamp/" + id,
        payload,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    },
  },

  getters: {
    filterMinicamp(state: IMinicampState) {
      return (search: string) =>
        state.list.data.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
    },
  },
});
