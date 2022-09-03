export interface OnTokenSaveArgs {
  newToken: string;
  storeTokenInStorage: boolean;
}

export type TokenContextValue =
  | undefined
  | {
      accessToken: string | null;
      onTokenSave: (args: OnTokenSaveArgs) => void;
    };
