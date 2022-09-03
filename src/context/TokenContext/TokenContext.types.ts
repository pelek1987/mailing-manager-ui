export type TokenContextValue =
  | undefined
  | {
      accessToken: string | undefined;
      onTokenSave: (newToken: string) => void;
    };
