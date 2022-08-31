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

import { AppRoute } from 'AppRoute';

import { SignInFormPayload, signInPayloadSchema } from './SignIn.types';
import * as styles from './SignIn.styles';

export const SignIn = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState<boolean>();

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

  const onSubmit = useCallback(
    (data: SignInFormPayload) => console.log(data),
    [],
  );

  return (
    <Paper sx={styles.container}>
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
        <TextField
          {...register('username')}
          variant="standard"
          label="E-mail *"
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
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
        <Button variant="contained" type="submit">
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
