import { useCallback, useReducer } from 'react';

import { isAxiosError } from 'api/axios';

import { ActionType, UseMutationProps } from './useMutation.types';
import { defaultMutationState, mutationReducer } from './mutationReducer';

export const useMutation = <T extends unknown>({
  mutateFn,
}: UseMutationProps<T>) => {
  const [mutationState, dispatchMutationAction] = useReducer(
    mutationReducer,
    defaultMutationState,
  );

  const onMutate = useCallback(
    async (payload: T) => {
      try {
        dispatchMutationAction({ type: ActionType.INIT });
        await mutateFn(payload);
      } catch (err) {
        if (isAxiosError(err) && err.response?.status === 400) {
          dispatchMutationAction({
            type: ActionType.FAIL,
            payload: 'You are not authorised.',
          });
          return;
        }
        dispatchMutationAction({
          type: ActionType.FAIL,
          payload: 'Something went wrong. Please try again',
        });
      } finally {
        dispatchMutationAction({
          type: ActionType.SUCCESS,
        });
      }
    },
    [mutateFn],
  );

  return {
    onMutate,
    mutationState,
  };
};
