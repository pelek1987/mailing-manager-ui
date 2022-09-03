import { ReactNode, useCallback, useMemo, useState } from 'react';

import { TokenContext } from './TokenContext';

export const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>();
  const onTokenSave = useCallback((newToken: string) => {
    setAccessToken(newToken);
  }, []);

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
