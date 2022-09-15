import { axiosInstance, axiosInstanceAuth, axiosInstanceAuthFormData } from "../services/Axios";
import EndPoints from "../services/EndPoints";

export function actionCheckTrade(tradeName, token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.ENTER_NEW_TRADE.replace("{enternewtrade}", tradeName))
    .then(function (response) {
      if (response?.data) {
        onResponse(response?.data, null);
      } else {
        onResponse(null, {});
      }
    })
    .catch(function (error) {
      onResponse(null, error?.response?.data?.detail);
    });
}

export function actionExpirationData(tradeName, token, onResponse) {
  
  axiosInstanceAuth(token)
    .get(EndPoints.EXPIRATION_DATE.replace("{stock}", tradeName))
    .then(function (response) {
      if (response?.data) {
        onResponse(response?.data, null);
      } else {
        onResponse(null, {});
      }
    })
    .catch(function (error) {
      onResponse(null, error?.response?.data?.detail);
    });
}


export function actionStrikeLimit(params, token, onResponse) {
  var bodyFormData = new FormData();
  bodyFormData.append("stock", params.stock);
  bodyFormData.append("expiration", params.expiration);
  bodyFormData.append("direction", params.direction);
  axiosInstanceAuthFormData(token)
    .post(EndPoints.LIMIT,bodyFormData)
    .then(function (response) {
      if (response?.data) {
        onResponse(response?.data, null);
      } else {
        onResponse(null, {});
      }
    })
    .catch(function (error) {
      onResponse(null, error?.response?.data?.detail);
    });
}
