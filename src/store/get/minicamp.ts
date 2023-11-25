import axios from "axios";
import { actions } from "../minicamp/minicamp.store";

export const getMinicamp = async () => {
  const { data } = await axios.get(
    "https://fazz-track-sample-api.vercel.app/minicamp",
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  actions.getMinicampSuccess(data.data);
};
