import { useCallback, useReducer } from 'react';

import { isAxiosError } from 'api/axios';

import { ActionType, UseMutationProps } from './useMutation.types';
import { defaultMutationState, mutationReducer } from './mutationReducer';

export const useMutation = <T extends unknown, R extends unknown>({
  mutateFn,
  onSuccess,
}: UseMutationProps<T, R>) => {
  const [mutationState, dispatchMutationAction] = useReducer(
    mutationReducer,
    defaultMutationState,
  );

  const onMutate = useCallback(
    async (payload: T) => {
      try {
        dispatchMutationAction({ type: ActionType.INIT });
        const res = await mutateFn(payload);
        if (onSuccess) {
          onSuccess(res);
        }
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
