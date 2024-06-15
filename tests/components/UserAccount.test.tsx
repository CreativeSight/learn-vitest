import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('UserAccount', () => {
  it('should render user name when provided', () => {
    const user: User = { id: 1, name: 'Konrad' };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('should render edit button when user is admin', () => {
    const user: User = { id: 1, name: 'Konrad', isAdmin: true };

    render(<UserAccount user={user} />);

    const editButton = screen.getByRole('button');

    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);
  });

  it("shouldn't render edit button when user is not admin", () => {
    render(<UserAccount user={{ id: 1, name: 'Konrad', isAdmin: false }} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
