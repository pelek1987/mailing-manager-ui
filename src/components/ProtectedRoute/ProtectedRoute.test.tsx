/* eslint-disable jest/no-disabled-tests */
import { rest } from 'msw';

import { render, screen } from 'tests';
import { server } from 'tests/mocks/server';
import { TOKEN_STORAGE_KEY } from 'context/TokenContext/TokenContextProvider';

import { ProtectedRoute } from './ProtectedRoute';

describe('ProtectedRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it.skip('renders children on successful auth', async () => {
    localStorage.setItem(TOKEN_STORAGE_KEY, 'test');
    render(<ProtectedRoute>test</ProtectedRoute>);

    const protectedElement = await screen.findByText(/test/);

    expect(protectedElement).toBeInTheDocument();
  });

  it.skip('does not render children on fail auth', async () => {
    localStorage.setItem(TOKEN_STORAGE_KEY, 'test');
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}/app/profile`,
        (_req, res, ctx) => res(ctx.status(401)),
      ),
    );
    render(<ProtectedRoute>test</ProtectedRoute>);

    await expect(screen.findByText(/test/)).rejects.toBeTruthy();
  });
});
