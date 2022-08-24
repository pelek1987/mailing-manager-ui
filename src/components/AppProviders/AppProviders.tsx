import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};
