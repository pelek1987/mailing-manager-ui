import { createTheme, Theme, SxProps } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#d34d00',
    },
  },
});

export type Styles = SxProps<Theme>;
