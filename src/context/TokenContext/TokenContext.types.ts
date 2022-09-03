export interface OnTokenSaveArgs {
  newToken: string;
  storeTokenInStorage: boolean;
}

export type TokenContextValue =
  | undefined
  | {
      accessToken: string | undefined;
      onTokenSave: (args: OnTokenSaveArgs) => void;
    };
