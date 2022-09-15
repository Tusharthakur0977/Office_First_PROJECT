import EndPoint from "./EndPoints";
import { axiosInstanceAuth } from './Axios'

// TODO : Clean this up when you refactor
const axiosInstance = axiosInstanceAuth(''); 

// From now on we dont need to pass token to all endpoints
// but token argument is keep to avoid breaking changes.

let {
  LOGIN,
  LOGIN_ME,
  FORGOT,
  VERIFY_OTP,
  RESET_PASSWORD,
  LOGIN_MFA,
  SECURITY_QUESTIONS,
  LOGIN_WEBULL,
  TOKEN,
} = EndPoint;

export const login = (data) => {
  return axiosInstance({
    method: "POST",
    url: LOGIN,
    data,
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const loginMeApi = (data) => {
  return axiosInstance({
    method: "GET",
    url: LOGIN_ME,
  });
};

export const forgetPass = (data) => {
  const formData = new FormData();
  formData.append("email", data);
  return axiosInstance({
    method: "POST",
    url: FORGOT,
    data: formData,
  });
};

export const confirmOtp = (data) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("otp", data.otp);
  return axiosInstance({
    method: "POST",
    url: VERIFY_OTP,
    data: formData,
  });
};

export const resetPassword = (data) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  return axiosInstance({
    method: "POST",
    url: RESET_PASSWORD,
    data: formData,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const registerUser = (data) => {
  return axiosInstance({
    method: "POST",
    url: '/',
    data,
  });
};

export const generateToken = (email, password) => {
  const formData = new FormData();
  formData.append("username", email);
  formData.append("password", password);
  return axiosInstance({
    method: "POST",
    url: TOKEN,
    data: formData,
  });
};

export const mfaLogin = (email, token) => {
  const formData = new FormData();
  formData.append("email", email);
  return axiosInstance({
    method: "POST",
    url: LOGIN_MFA,
    data: formData,
  });
};

export const SecurityQuestion = (token, email) => {
  const formData = new FormData();
  formData.append("email", email);
  return axiosInstance({
    method: "POST",
    url: SECURITY_QUESTIONS,
    data: formData,
  });
};

export const webullLogin = (token, data) => {
  // const formData = new FormData();
  // formData.append("email", email);
  return axiosInstance({
    method: "POST",
    url: LOGIN_WEBULL,
    data: data,
  });
};
