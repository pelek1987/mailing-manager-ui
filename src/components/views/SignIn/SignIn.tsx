import { ChangeEvent, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import axios from 'api/axios';
import { AppRoute } from 'AppRoute';

import { SignInFormPayload, signInPayloadSchema } from './SignIn.types';
import * as styles from './SignIn.styles';

export const SignIn = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setIsRememberMeChecked(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormPayload>({
    resolver: yupResolver(signInPayloadSchema),
  });

  const onSubmit = useCallback(async (payload: SignInFormPayload) => {
    try {
      setIsLoading(true);
      setErrorMessage(undefined);
      await axios.post('/app/auth/login', payload);
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Paper sx={styles.container}>
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
        <TextField
          {...register('email')}
          variant="standard"
          label="E-mail *"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          fullWidth
        />
        <TextField
          {...register('password')}
          variant="standard"
          type="password"
          label="Password *"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          fullWidth
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={isRememberMeChecked} onChange={handleCheck} />
            }
            label="Remember me"
          />
        </FormGroup>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <Button variant="contained" type="submit" disabled={isLoading}>
          SIGN IN
        </Button>
        <Typography>
          Don&apos;t have an account?{' '}
          <Link to={AppRoute.signUp}>Click here</Link> to create one.
        </Typography>
      </Box>
    </Paper>
  );
};
