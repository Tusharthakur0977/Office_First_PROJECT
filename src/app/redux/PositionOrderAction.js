import {
  axiosInstance,
  axiosInstanceAuth,
  axiosInstanceAuthFormData,
} from "../services/Axios";
import EndPoints from "../services/EndPoints";

export function actionPositionOrder(token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.SERVERDATA)
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

export function actionCurrentPosition(token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.CURRENT_POSITION)
    .then(function (response, error) {
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


export function actionOpenOrder(token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.STANDING_OPTIONS_ORDER)
    .then(function (response, error) {
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

export function actionPlaceOrderOption(token, params, onResponse) {
  axiosInstanceAuth(token)
    .post(EndPoints.PLACE_ORDER_OPTION, params)
    .then(function (response, error) {
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

export function actionTransactionHistory(token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.TRANSACTION_HISTORY)
    .then(function (response, error) {
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

export function actionCancelOrder(orderId, token, onResponse) {
  axiosInstanceAuth(token)
    .get(EndPoints.CANCEL_ORDER.replace("{order_id}", orderId))
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

export function actionModifyOrder(token, params, onResponse) {
  axiosInstanceAuth(token)
    .post(EndPoints.MODIFY_ORDER, params)
    .then(function (response, error) {
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
