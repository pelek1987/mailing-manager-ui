import { useCallback, useState } from 'react';

import axios from '../axios';

export const useMutation = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onMutate = useCallback(async (payload: T) => {
    try {
      setIsLoading(true);
      setErrorMessage(undefined);
      await axios.post('/app/auth/login', payload);
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    onMutate,
    isLoading,
    errorMessage,
  };
};
