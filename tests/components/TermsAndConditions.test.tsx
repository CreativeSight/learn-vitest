import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      button: screen.getByRole('button'),
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
    };
  };

  it('should render component correctly', () => {
    const { button, checkbox, heading } = renderComponent();

    expect(heading).toHaveTextContent('Terms & Conditions');
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it('should enable button when checkbox is checked', async () => {
    const { button, checkbox } = renderComponent();
    const user = userEvent.setup();

    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
