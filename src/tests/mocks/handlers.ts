import { rest } from 'msw';

const loginHandler = rest.post(
  `${process.env.REACT_APP_API_URL}/app/auth/login`,
  async (_req, res, ctx) =>
    res(
      ctx.json({
        accessToken: 'test',
        user: {
          email: 'test@example.com',
          id: 1,
        },
      }),
    ),
);

const profileHandler = rest.get(
  `${process.env.REACT_APP_API_URL}/app/profile`,
  (_req, res, ctx) => res(ctx.json({})),
);

export const handlers = [loginHandler, profileHandler];
