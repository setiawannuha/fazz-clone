import axios from "axios";
import { state } from "../user/user.store";
import { actions } from "../video/video.store";
import type { LocationQueryValue } from "vue-router";

export const getVideo = async () => {
  const { data } = await axios.get(
    "https://fazz-track-sample-api.vercel.app/video",
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  actions.getVideoSuccess(data.data);
};

export const getDetailVideo = async (id: number | LocationQueryValue[]) => {
  const { data } = await axios.get(
    `https://fazz-track-sample-api.vercel.app/video/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  actions.getDetailVideoSuccess(data.data);
};
