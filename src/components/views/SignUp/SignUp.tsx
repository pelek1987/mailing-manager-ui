import { useCallback } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import axios from 'api/axios';
import { AppRoute } from 'AppRoute';
import { useMutation } from 'api/useMutation/useMutation';

import * as styles from './SignUp.styles';
import { SignUpFormPayload, signUpPayloadSchema } from './SignUp.types';

export const SignUp = () => {
  const { onMutate, mutationState } = useMutation({
    mutateFn: (payload: Omit<SignUpFormPayload, 'passwordConfirmation'>) =>
      axios.post('/app/auth/register', payload),
  });

  const handleMutate = useCallback(
    (payload: SignUpFormPayload) => {
      const { passwordConfirmation, ...validPayload } = payload;
      onMutate(validPayload);
    },
    [onMutate],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormPayload>({
    resolver: yupResolver(signUpPayloadSchema),
  });

  return (
    <Paper sx={styles.container}>
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(handleMutate)}
        sx={styles.form}
      >
        <TextField
          {...register('email')}
          variant="standard"
          label="E-mail *"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          fullWidth
        />
        <TextField
          {...register('firstname')}
          variant="standard"
          label="First name *"
          error={Boolean(errors.firstname)}
          helperText={errors.firstname?.message}
          fullWidth
        />
        <TextField
          {...register('lastname')}
          variant="standard"
          label="Last name *"
          error={Boolean(errors.lastname)}
          helperText={errors.lastname?.message}
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
        <TextField
          {...register('passwordConfirmation')}
          variant="standard"
          type="password"
          label="Password confirmation *"
          error={Boolean(errors.passwordConfirmation)}
          helperText={errors.passwordConfirmation?.message}
          fullWidth
        />
        {mutationState.errorMessage && (
          <Typography color="error">{mutationState.errorMessage}</Typography>
        )}
        <Button
          variant="contained"
          type="submit"
          disabled={mutationState.isLoading}
        >
          SIGN UP
        </Button>
        <Typography>
          Have an account already? <Link to={AppRoute.signIn}>Click here</Link>{' '}
          to sign in.
        </Typography>
      </Box>
    </Paper>
  );
};
