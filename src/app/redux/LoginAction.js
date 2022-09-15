import {
  axiosInstance,
  axiosInstanceAuth,
  axiosInstanceAuthFormData,
  axiosInstanceFormURLEncoded,
} from "../services/Axios";
import EndPoints from "../services/EndPoints";

// export function actionLogin(params, onResponse) {
//   console.log(params);
//   axiosInstance
//     .post(EndPoints.LOGIN, params)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionLoginMe(token, onResponse) {
//   console.log(token);
//   axiosInstanceAuth(token)
//     .get(EndPoints.LOGIN_ME)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionLoginWeBull(token, params, onResponse) {
//   axiosInstanceAuth(token)
//     .post(EndPoints.LOGIN_WEBULL, params)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionLoginMfa(token, params, onResponse) {
//   var bodyFormData = new FormData();
//   bodyFormData.append("email", params.email);
//   axiosInstanceAuthFormData(token)
//     .post(EndPoints.LOGIN_MFA, bodyFormData)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

export function actionVerifyOTP(token, params, onResponse) {
  var bodyFormData = new FormData();
  bodyFormData.append("email", params.email);
  bodyFormData.append("otp", params.otp);
  axiosInstanceAuthFormData(token)
    .post(EndPoints.VERIFY_OTP, bodyFormData)
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

// export function actionLoginMfaQuestions(token, params, onResponse) {
//   var bodyFormData = new FormData();
//   bodyFormData.append("email", params.email);
//   axiosInstanceAuthFormData(token)
//     .post(EndPoints.SECURITY_QUESTIONS, bodyFormData)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionLoginMfaQuestionsChange(token, params, onResponse) {
//   var bodyFormData = new FormData();
//   bodyFormData.append("email", params.email);
//   axiosInstanceAuthFormData(token)
//     .post(EndPoints.SECURITY_QUESTIONS_NEXT, bodyFormData)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionRegister(params, onResponse) {
//   axiosInstance
//     .post(EndPoints.REGISTER, params)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }

// export function actionForgot(params, onResponse) {
//   var bodyFormData = new FormData();
//   bodyFormData.append("email", params);
//   axiosInstanceAuthFormData()
//     .post(EndPoints.FORGOT, bodyFormData)
//     .then(function (response) {
//       if (response?.data) {
//         onResponse(response?.data, null);
//       } else {
//         onResponse(null, {});
//       }
//     })
//     .catch(function (error) {
//       onResponse(null, error?.response?.data?.detail);
//     });
// }
