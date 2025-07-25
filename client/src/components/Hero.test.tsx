import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { SOCIAL_LINKS } from '@/lib/constants';

describe('Hero Component', () => {
  it('renders the name and title', () => {
    render(<Hero />);
    expect(screen.getByText('Andrew Kittridge')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Web Developer | Java, Spring & Enterprise Modernization')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Hero />);
    expect(screen.getByText(SOCIAL_LINKS.email)).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText(SOCIAL_LINKS.phone)).toBeInTheDocument();
  });

  it('renders buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('View My Work')).toBeInTheDocument();
  });
}); 