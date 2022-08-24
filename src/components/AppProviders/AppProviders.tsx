import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
