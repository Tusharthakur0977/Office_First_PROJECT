import { I18n } from 'aws-amplify';

// how to login
export const loginMechanisms = ['email'];

// attributes for signing up
export const signUpAttributes = [
  'given_name',
  'family_name',
  'phone_number',
];

// cusotmize amplify authenticator form fields and labels
export const formFields = {
  signIn: {
    username: {
      placeholder: 'Email',
      isRequired: true,
      label: 'Email',
      labelHidden: true,
    },
    password: {
      placeholder: 'Password',
      isRequired: true,
      label: 'Password',
      labelHidden: true,
    },
  },
  signUp: {
    given_name: {
      order: 1,
      placeholder: 'First Name',
      label: 'First Name',
      labelHidden: true,
      isRequired: true,
    },
    family_name: {
      order: 2,
      placeholder: 'Last Name',
      label: 'Last Name',
      labelHidden: true,
      isRequired: true,
    },
    phone_number: {
      order: 3,
      placeholder: 'Mobile Number',
      label: 'Mobile Number',
      labelHidden: true,
      isRequired: true,
    },
    email: {
      order: 4,
      placeholder: 'Email',
      label: 'Email',
      isRequired: true,
      labelHidden: true,
    },
    password: {
      order: 5,
      placeholder: 'Password',
      label: 'Password',
      isRequired: true,
      labelHidden: true,
    },
    confirm_password: {
      order: 6,
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      labelHidden: true,
      isRequired: true,
    },
  }
}

// customize button etc of authenticator ui
I18n.putVocabulariesForLanguage('en', {
  // Login
  'Sign In': 'Login', // Tab header
  'Sign in': 'Log in', // Button label

  // Register
  'Forgot your password?': 'Reset Password',
  'Create Account': 'Register', // Tab header
  'Create account': 'Register', // Button text

  // Forgot Password
  'Reset your password': 'Forgot your password?', // heading
  'Send code': 'Send Code', // Button text
  'Back to Sign In': 'Back to Login', // Link Text
});