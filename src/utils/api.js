import { useRecoilValue } from "recoil";
import Cookies from "js-cookie";
import axios from "axios";

/**
 * @description Axios 인스턴스를 생성
 * 목적 : axios 요청 시 header에 token을 보내기 위함
 */

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken"); // Cookies 모듈을 이용해 accessToken을 가져옵니다.

    try {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (err) {
      console.error("[_axios.interceptors.request] config : " + err.message);
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

export default instance;
