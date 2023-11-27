import { defineStore } from "pinia";
import type { Video, IState, IPayload } from "@/stores/video/interface";
import axios from "axios";

export const useVideoStore = defineStore("post", {
  state: (): IState => {
    return {
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
      isLoading: false,
    };
  },

  actions: {
    async getAll() {
      const { data } = await axios.get(
        "https://fazz-track-sample-api.vercel.app/video",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log(data);

      this.list = data.data;
    },

    async getDetail(id: string) {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          `https://fazz-track-sample-api.vercel.app/video/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        this.detail = data.data;
      } catch (error) {
        window.alert(error);
      } finally {
        this.isLoading = false;
      }
    },

    async createVideo({
      title,
      description,
      rating,
      level,
      price,
      cover,
    }: IPayload) {
      return await axios.post(
        "https://fazz-track-sample-api.vercel.app/video",
        {
          title,
          description,
          rating,
          level,
          price,
          cover,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    },

    async editVideo(
      id: number,
      { title, description, rating, level, price, cover }: IPayload
    ) {
      return await axios.put(
        `https://fazz-track-sample-api.vercel.app/video/${id}`,
        {
          title,
          description,
          rating,
          level,
          price,
          cover,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    },

    async deleteVideo(id: number) {
      try {
        await axios.delete(
          `https://fazz-track-sample-api.vercel.app/video/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        await this.getAll();
        window.alert("Course Deleted");
      } catch (error) {
        window.alert(error);
      }
    },
  },

  getters: {
    filterVideo(state: IState) {
      return (search: string) =>
        state.list.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
    },
  },
});
