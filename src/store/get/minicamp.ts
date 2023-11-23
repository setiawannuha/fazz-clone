import axios from "axios";
import { state } from "../user/user.store";
import { actions } from "../minicamp/minicamp.store";

export const getMinicamp = async () => {
  const { data } = await axios.get(
    "https://fazz-track-sample-api.vercel.app/minicamp",
    {
      headers: {
        Authorization: state.data.token,
      },
    }
  );

  actions.getMinicampSuccess(data.data);
};
