import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <Footer>
        <p>Child paragraph 1</p>
        <div>Child div</div>
      </Footer>
    );

    expect(getByText('Child paragraph 1')).toBeInTheDocument();
    expect(getByText('Child div')).toBeInTheDocument();
  });

  test('renders without children', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveAttribute('data-testid', 'footer-container');
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
