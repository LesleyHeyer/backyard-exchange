import {render, screen} from '@testing-library/react';
import About from './About';

describe("About Tests", () => {
test('Header renders "About" as title', () => {
    render(<About />);
    const AboutTitle = screen.getByText('About');
    expect(AboutTitle).toBeInTheDocument();
  });
})