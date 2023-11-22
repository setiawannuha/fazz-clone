import axios from "axios";

interface IRegister {
  email: string;
  password: string;
}

export const registerAction = async ({ email, password }: IRegister) => {
  try {
    await axios.post("https://fazz-track-sample-api.vercel.app/register", {
      email,
      password,
    });

    window.alert("Account created");
  } catch (error) {
    window.alert(error);
  }
};
