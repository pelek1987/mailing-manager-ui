import { render, screen } from 'tests';

import { Home } from './Home';

describe('Home', () => {
  it('renders title', () => {
    render(<Home />);

    const title = screen.getByText(/Mailing Manager/);

    expect(title).toBeInTheDocument();
  });
});
