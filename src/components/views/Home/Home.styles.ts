import { SxProps, Theme } from '@mui/material';

export const layout: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
};

export const container: SxProps<Theme> = {
  paddingX: 10,
  paddingY: 5,
};

export const buttonsContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 2,
  marginTop: 7,
};
