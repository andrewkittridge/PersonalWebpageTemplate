import { useState, useEffect } from "react";

export default function SkipToMain() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        bg-primary text-primary-foreground px-4 py-2 rounded-md
        transform transition-transform duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </a>
  );
}
