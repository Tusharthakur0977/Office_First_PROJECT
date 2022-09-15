import { useEffect } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router';
import { DASHBOARD_URL } from './Constants';

export const RequireGuest = ({ children }) => {

  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || DASHBOARD_URL;

  useEffect(() => {
    if (authStatus === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [authStatus, navigate, from]);

  // does not work if this is uncommented
  // if (authStatus == 'configuring') {
  //   return <div>...</div>;
  // }

  return children;
}