import { InferType, object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'This field cannot be empty',
  },
  string: {
    email: 'Invalid e-mail',
    min: 'Minimum length is 6 characters',
  },
});

export const signInPayloadSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
}).required();

export interface SignInFormPayload
  extends InferType<typeof signInPayloadSchema> {}

export interface SignInResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}
