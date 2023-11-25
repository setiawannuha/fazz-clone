import axios from "axios";
import { actions } from "../minicamp/minicamp.store";
import { actions as actionsMinicamp } from "../minicamp/minicamps.store";
import type { LocationQueryValue } from "vue-router";


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

export const getDetailMinicamp = async (id: number | LocationQueryValue[]) => {
  const { data } = await axios.get(
    `https://fazz-track-sample-api.vercel.app/minicamp/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  actionsMinicamp.getDetailMinicampsSuccess(data.data);
};