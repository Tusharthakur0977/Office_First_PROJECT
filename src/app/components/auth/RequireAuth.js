import { useAuthenticator } from '@aws-amplify/ui-react';
import { useLocation, Navigate } from 'react-router';
import { LOGIN_URL } from './Constants';

export const RequireAuth = ({ children }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const location = useLocation();

  if (authStatus === 'configuring') {
    return <div>...</div>;
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to={LOGIN_URL} state={{ from: location }} replace />
  }

  return children;
}