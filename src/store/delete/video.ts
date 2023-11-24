import axios from "axios";
import { getVideo } from "../get/video";

export const deleteCourse = async (id: number) => {
  try {
    await axios.delete(`https://fazz-track-sample-api.vercel.app/video/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    await getVideo();
    window.alert("Course Deleted");
  } catch (error) {
    window.alert(error);
  }
};
