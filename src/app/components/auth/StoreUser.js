import { USER, removeData, saveData } from '../../utils/storage';
import { useEffect } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { loginMeApi } from "../../services/AuthApis";

// Stores user in localstorage
// most old code expects USER object in local storage.
export const StoreUser = () => {

  const { user, authState, route } = useAuthenticator((context) => [
    context.route,
    context.authState, 
    context.user
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      await loginMeApi('');
    }

    if (user) {
      saveData(USER, JSON.stringify(user), () => {});
      fetchUser();
      return;
    }

    removeData(USER, () => {});

  }, [user, authState, route]);

  return null;
}