import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import * as styles from './CenteredLayout.styles';

export const CenteredLayout = () => (
  <Box sx={styles.layout}>
    <Outlet />
  </Box>
);
