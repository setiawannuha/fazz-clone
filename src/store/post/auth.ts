import axios from "axios";
import { useRouter } from "vue-router";
import { actions } from "../user/user.store";

interface IAuth {
  email: string;
  password: string;
}

export const registerAction = async ({ email, password }: IAuth) => {
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

export const loginAction = async (
  { email, password }: IAuth,
  cb: () => void
) => {
  try {
    const { data } = await axios.post(
      "https://fazz-track-sample-api.vercel.app/login",
      {
        email,
        password,
      }
    );

    window.alert("Login Success");
    localStorage.setItem("token", data.data.token);

    actions.loginFulfiled({
      data: { email: data.data.user.email, token: data.data.token },
    });
    cb();
  } catch (error) {
    window.alert(error);
  }
};
