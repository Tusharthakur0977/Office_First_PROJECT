import * as subscriptions from '../../../../gql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';

export const useAnalystDataUpdateEvent = () => {
  const [version, setVersion] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onAnalystDataAddEvent)
    ).subscribe({
      next: () => {
        setVersion(v => v+1)
      },
      error: e => {
        setError(e);
      }
    });

    return () => subscription.unsubscribe();

  },[]);
  return { version, error }
}