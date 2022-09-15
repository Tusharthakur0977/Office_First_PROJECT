import { Auth } from "aws-amplify";
import {
  Authenticator,
  useTheme,
  View,
  Image,
  useAuthenticator,
  Text,
} from "@aws-amplify/ui-react";
import { Button } from "@mui/material";

import {
  formFields,
  loginMechanisms,
  signUpAttributes,
} from "../../../cognitoConfig";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../navigation/RoutePath";
import "../../../styles/cognitoAuth.css";
import { makeStyles } from "@mui/styles";

const useLoginStyles = makeStyles((theme) => ({
  textButton: {
    textTransform: "capitalize !important",
  },
  buttonMarginBottom: {
    display: "inline-block !important",
    marginBottom: "0.5 !important",
  },
}));

window._auth = Auth;

/**
 *
 * @param {Object} props - react props
 * @param {('signIn'|'signUp'|'resetPassword')} [props.initialScreen='signIn'] - screen to show initially
 *
 */
export const CognitoAuthenticator = ({ initialScreen = "signIn" }) => {
  const classes = useLoginStyles();
  const navigate = useNavigate();
  // components to inject into amplify authenticator
  // modifies things like header and footer
  const components = {
    Header() {
      const { tokens } = useTheme();
      return (
        <View textAlign="center" paddingBottom={tokens.space.large}>
          <Image alt="Wyzalgo logo" src="assets/images/logo.png" />
        </View>
      );
    },
    SignIn: {
      Footer() {
        const { tokens } = useTheme();
        const { toResetPassword } = useAuthenticator();
        const toRegister = () => {
          navigate(RoutePath.register.path);
        };
        return (
          <View textAlign="center" paddingBottom={tokens.space.large}>
            <Button
              variant="text"
              className={`${classes.textButton} ${classes.buttonMarginBottom}`}
              onClick={toResetPassword}
            >
              Forgot Password?
            </Button>
            <div>
              <Text
                variation="secondary"
                padding="6px 0"
                lineHeight="1.75"
                fontSize="0.875rem"
                display="inline-block"
              >
                Dont have an account?
              </Text>
              <Button
                variant="text"
                className={classes.textButton}
                onClick={toRegister}
              >
                Register
              </Button>
            </div>
          </View>
        );
      },
    },
    SignUp: {
      Footer() {
        const { tokens } = useTheme();
        const toSignIn = () => {
          navigate(RoutePath.login.path);
        };
        return (
          <View textAlign="center" paddingBottom={tokens.space.large}>
            <div>
              <Text
                variation="secondary"
                padding="6px 0"
                lineHeight="1.75"
                fontSize="0.875rem"
                display="inline-block"
              >
                Already have an account?
              </Text>
              <Button
                className={classes.textButton}
                onClick={toSignIn}
                variation="text"
              >
                Login
              </Button>
            </div>
          </View>
        );
      },
    },
  };

  return (
    <div className="cognito-authenticator">
      <Authenticator
        initialState={initialScreen}
        components={components}
        formFields={formFields}
        signUpAttributes={signUpAttributes}
        loginMechanisms={loginMechanisms}
      >
        {({ signOut, user }) => null}
      </Authenticator>
    </div>
  );
};
