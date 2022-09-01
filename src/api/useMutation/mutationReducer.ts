import { ActionType, MutationAction, MutationState } from './useMutation.types';

export const defaultMutationState: MutationState = {
  isLoading: false,
  errorMessage: undefined,
};

export const mutationReducer = (
  state: MutationState,
  action: MutationAction,
): MutationState => {
  switch (action.type) {
    case ActionType.INIT:
      return {
        isLoading: true,
        errorMessage: undefined,
      };
    case ActionType.FAIL:
      return {
        isLoading: false,
        errorMessage: action.payload,
      };
    case ActionType.SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error('Wrong action type.');
  }
};
