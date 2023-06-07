import { LoginFormType } from "@/components/user/type";
import axios from "@/utils/api";

export const postLoginRequest = async (loginForm: LoginFormType) => {
  const { data } = await axios.post("/login", loginForm);

  return data.data;
};
