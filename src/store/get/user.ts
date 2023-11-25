import axios from "axios";
import { actions } from "../user/profile.store";

export const getProfile = async () => {
  const { data } = await axios.get(
    "https://fazz-track-sample-api.vercel.app/profile",
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
    );

  actions.profileFulfilled(data);
};