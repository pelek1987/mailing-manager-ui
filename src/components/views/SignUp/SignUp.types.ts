import { InferType, object, ref, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'This field cannot be empty',
  },
  string: {
    email: 'Invalid e-mail',
    min: 'Minimum length is 6 characters',
  },
});

export const signUpPayloadSchema = object({
  firstname: string().required(),
  lastname: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  passwordConfirmation: string()
    .min(6)
    .required()
    .oneOf([ref('password')], 'Your passwords do not match.'),
}).required();

export interface SignUpFormPayload
  extends InferType<typeof signUpPayloadSchema> {}
