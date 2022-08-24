import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoute } from 'AppRoute';

import * as styles from './Home.styles';

export const Home = () => {
  return (
    <Box sx={styles.layout}>
      <Paper sx={styles.container}>
        <Typography variant="h1">Mailing Manager</Typography>
        <Box sx={styles.buttonsContainer}>
          <Button
            component={Link}
            to={AppRoute.signIn}
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
          <Button
            component={Link}
            to={AppRoute.signUp}
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
