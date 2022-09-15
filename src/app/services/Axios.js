import axios from "axios";
import EndPoints from "./EndPoints";
import { Auth } from "aws-amplify";

// TODO:
// This file needs to be simplified for usablity
// we need to export just one axios instance.

// automatically adds auth token to every request
export const addAuthToken = async function (config) {
  try {
    const session = await Auth.currentSession();
    const token = session.getIdToken().getJwtToken();
    config.headers["Authorization"] = `Bearer ${token}`;
    // console.log(config.headers.Authorization);
  } catch (e) {}
  return config;
};

// helper to create axios instance
const createAxiosInstance = ({
  baseURL = EndPoints.BASE_URL,
  timeout = 20000,
  auth = true,
  extraHeaders = {},
  crossdomain = true,
}) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    ...extraHeaders,
  };

  const axiosInstance = axios.create({
    baseURL,
    timeout,
    headers,
    crossdomain,
  });

  if (auth) {
    axiosInstance.interceptors.request.use(addAuthToken, (e) =>
      Promise.reject(e)
    );
  }

  return axiosInstance;
};

const _axiosInstanceAuth = createAxiosInstance({});
const _axiosInstanceAuthFormData = createAxiosInstance({
  extraHeaders: { "Content-Type": "application/x-www-form-urlencoded" },
});
const _axiosInstanceAuthOneConnect = createAxiosInstance({
  baseURL: "https://testoneconnect.myoutdooragent.com/api/",
  extraHeaders: { "Content-Type": "application/json" },
  auth: false,
}); // unused
const _axiosInstanceMultiPartAuth = createAxiosInstance({
  extraHeaders: { "Content-Type": "multipart/form-data" },
}); // unused

// for backward compatibility
// there is no need to create separate axios instance for every request
export const axiosInstance = createAxiosInstance({ auth: false });
export const axiosInstanceAuth = (_) => _axiosInstanceAuth;
export const axiosInstanceAuthFormData = (_) => _axiosInstanceAuthFormData;
export const axiosInstanceAuthOneConnect = (_) => _axiosInstanceAuthOneConnect; // unused
export const axiosInstanceMultiPartAuth = (_) => _axiosInstanceMultiPartAuth; // unused
