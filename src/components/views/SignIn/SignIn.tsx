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
import { Link, useNavigate } from 'react-router-dom';

import axios from 'api/axios';
import { AppRoute } from 'AppRoute';
import { useMutation } from 'api/useMutation/useMutation';

import * as styles from './SignIn.styles';
import { SignInFormPayload, signInPayloadSchema } from './SignIn.types';

export const SignIn = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState<boolean>();
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate(AppRoute.home);
  }, [navigate]);

  const { onMutate, mutationState } = useMutation({
    mutateFn: (payload: SignInFormPayload) =>
      axios.post('/app/auth/login', payload),
    onSuccess,
  });
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

  return (
    <Paper sx={styles.container}>
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onMutate)} sx={styles.form}>
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
        {mutationState.errorMessage && (
          <Typography color="error">{mutationState.errorMessage}</Typography>
        )}
        <Button
          variant="contained"
          type="submit"
          disabled={mutationState.isLoading}
        >
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
