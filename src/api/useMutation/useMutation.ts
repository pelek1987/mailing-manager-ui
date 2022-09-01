import { useCallback, useReducer } from 'react';

import axios from '../axios';

import { ActionType } from './mutation.types';
import { defaultMutationState, mutationReducer } from './mutationReducer';

export const useMutation = <T>() => {
  const [mutationState, dispatchMutationAction] = useReducer(
    mutationReducer,
    defaultMutationState,
  );

  const onMutate = useCallback(async (payload: T) => {
    try {
      dispatchMutationAction({ type: ActionType.INIT });
      await axios.post('/app/auth/login', payload);
    } catch (err) {
      dispatchMutationAction({
        type: ActionType.FAIL,
        payload: 'Something went wrong. Please try again',
      });
    } finally {
      dispatchMutationAction({
        type: ActionType.SUCCESS,
      });
    }
  }, []);

  return {
    onMutate,
    mutationState,
  };
};
