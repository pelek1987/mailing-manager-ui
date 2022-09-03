import { CssBaseline, ThemeProvider } from '@mui/material';

import { TokenContextProvider } from 'context/TokenContext/TokenContextProvider';
import { theme } from 'theme/theme';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TokenContextProvider>{children}</TokenContextProvider>
    </ThemeProvider>
  );
};
