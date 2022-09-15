import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import ContextProvider from "./app/context/Context";

// important dont provide aws_appsync_apiKey
Amplify.configure({
  aws_appsync_graphqlEndpoint:
    "https://btzmdii5xrhobha45b3iw4dlje.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_appsync_apiKey: "null",
  Auth: {
    userPoolId: "us-east-1_6kBGHasDF",
    region: "us-east-1",
    userPoolWebClientId: "6cte1ugvc7ro93luc3iilm56le",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
