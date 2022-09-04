import { AxiosInstance } from 'axios';

export type MutationState =
  | {
      isLoading: true;
      errorMessage: undefined;
    }
  | {
      isLoading: false;
      errorMessage: string | undefined;
    };

export enum ActionType {
  INIT = 'INIT',
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

type InitAction = { type: ActionType.INIT };
type FailAction = { type: ActionType.FAIL; payload: string };
type SuccessAction = { type: ActionType.SUCCESS };

export type MutationAction = InitAction | FailAction | SuccessAction;

export interface UseMutationProps<T, R> {
  mutateFn: (axios: AxiosInstance) => (arg: T) => Promise<R>;
  onSuccess?: (arg: R) => void;
}
