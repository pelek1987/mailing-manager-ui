import { ReactNode, useCallback, useMemo, useState } from 'react';

import { TokenContext } from './TokenContext';
import { OnTokenSaveArgs } from './TokenContext.types';

const TOKEN_STORAGE_KEY = 'ACCESS_TOKEN';

export const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem(TOKEN_STORAGE_KEY),
  );

  const onTokenSave = useCallback(
    ({ newToken, storeTokenInStorage }: OnTokenSaveArgs) => {
      setAccessToken(newToken);
      if (storeTokenInStorage) {
        localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
      }
    },
    [],
  );

  const contextValue = useMemo(
    () => ({ accessToken, onTokenSave }),
    [accessToken, onTokenSave],
  );

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
};
