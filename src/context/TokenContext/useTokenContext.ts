import { useContext } from 'react';

import { TokenContext } from './TokenContext';

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error(
      'useToken context can only be used inside TokenContextProvider',
    );
  }
  return context;
};
