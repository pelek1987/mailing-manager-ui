import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import { AppRoute } from 'AppRoute';
import { render, screen } from 'tests';
import { server } from 'tests/mocks/server';

import { SignIn } from './SignIn';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('SignIn', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders email field and password field', () => {
    render(<SignIn />);

    const emailField = screen.getByLabelText(/E-mail */);
    const passwordField = screen.getByLabelText(/Password */);

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });
  it('redirects to dashboard on login', async () => {
    render(<SignIn />);

    const emailField = screen.getByLabelText(/E-mail */);
    const passwordField = screen.getByLabelText(/Password */);
    const submitButton = screen.getByRole('button');

    await userEvent.type(emailField, 'admin@admin.com');
    await userEvent.type(passwordField, 'admin123');
    await userEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(AppRoute.dashboard);
  });
  it('does not redirect on error', async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_API_URL}/app/auth/login`,
        async (_req, res, ctx) => res(ctx.status(500)),
      ),
    );
    render(<SignIn />);

    const emailField = screen.getByLabelText(/E-mail */);
    const passwordField = screen.getByLabelText(/Password */);
    const submitButton = screen.getByRole('button');

    await userEvent.type(emailField, 'admin@admin.com');
    await userEvent.type(passwordField, 'admin123');
    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      /Something went wrong. Please try again/,
    );

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(errorMessage).toBeInTheDocument();
  });
});
