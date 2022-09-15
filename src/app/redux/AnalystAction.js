import { axiosInstance, axiosInstanceAuth } from "../services/Axios";
import EndPoints from "../services/EndPoints";

export function actionAnalystList(serverId,token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.ANALYST.replace("{serverId}",serverId))
    .then(function (response) {
      if (response?.data) {
        onResponse(response?.data,null);
      } else {
        onResponse(null, {});
      }
    })
    .catch(function (error) {
      onResponse(null, error?.response?.data?.detail);
    });
}
