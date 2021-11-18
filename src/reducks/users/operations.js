import axios from "axios";
import { AppConfig } from "../../common/config";
import { push } from "connected-react-router";

const ENDPOINT = {
  SIGN_IN: "/api/v1/login/",
};

export const signIn = (email, password, location) => {
  return async (dispatch) => {
    const param =
      location.search === ""
        ? "requestquotes"
        : location.search.replace("?next=", "");
    try {
      const result = await axios.post(
        `${AppConfig.api.url}${ENDPOINT.SIGN_IN}`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("access_token", result.data.access);
      localStorage.setItem("refresh_token", result.data.refresh);
      dispatch(push(`/${param}`));
    } catch (e) {
      window.confirm("メールアドレスかパスワードが間違っています。");
      console.log(e);
    }
  };
};
