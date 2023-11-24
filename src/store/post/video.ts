import axios from "axios";
import { useRouter } from "vue-router";
import { actions } from "../user/user.store";

interface IAuth {
  title: string;
  description: string;
  rating: number;
  level: string;
  price: number;
  cover: string;
}

const router = useRouter();

export const createCourse = async (
  { title, description, rating, level, price, cover }: IAuth,
  cb: () => void
) => {
  try {
    await axios.post(
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

    window.alert("Course Created");
    cb();
  } catch (error) {
    window.alert(error);
  }
};
