import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-light tracking-wide">
              Andrew Kittridge
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {currentYear} All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 