import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./app/navigation/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ErrorBoundary } from "react-error-boundary";
// import Fallback from "./app/utils/Fallback";
// import ErrorHandler from "./app/utils/ErrorHandler";
import { ThemeProvider as AmplifyThemeProvider } from "@aws-amplify/ui-react";
import { amplifylightTheme } from "./amplifyTheme";
import { Authenticator } from "@aws-amplify/ui-react";
import { StoreUser } from "./app/components/auth/StoreUser";
import { darkTheme, lightTheme } from "./app/components/theme/ThemePalette";
import { Context } from "./app/context/Context";
import { useContext } from "react";

function App() {
  const { toggleDark } = useContext(Context);

  return (
    // amplify is ui library that we use for cognito authentication
    <AmplifyThemeProvider theme={amplifylightTheme}>
      <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
        {/* provides authentication state */}
        <Authenticator.Provider>
          <StoreUser />
          {/* <ErrorBoundary FallbackComponent={Fallback} onError={ErrorHandler}> */}
          <AppRoutes />
          {/* </ErrorBoundary> */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Authenticator.Provider>
      </ThemeProvider>
    </AmplifyThemeProvider>
  );
}

export default App;
