import axios from "axios";
import { state } from "../user/user.store";
import { actions } from "../video/video.store";

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
