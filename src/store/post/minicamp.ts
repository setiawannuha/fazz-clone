import axios from "axios";

interface IMinicamp {
  title: string;
  description: string;
  trainerName: string;
  trainerTitle: string;
  trainerPicture: string;
  batch: string;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}

export const createMinicamp = async (
  { title, description, trainerName, trainerTitle, trainerPicture, batch, location, startDate, endDate, isWork, price }: IMinicamp,
  cb: () => void
) => {
  try {
    await axios.post(
      "https://fazz-track-sample-api.vercel.app/minicamp",
      {
        title, description, trainerName, trainerTitle, trainerPicture, batch, location, startDate, endDate, isWork, price
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
