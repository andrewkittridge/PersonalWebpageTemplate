import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black py-12">
      <div className="page-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Andrew Kittridge
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Full-Stack Java Developer specializing in enterprise application modernization,
              secure systems, and AI integrations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-ghost px-4 py-3"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-ghost px-4 py-3"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Andrew Kittridge. All rights reserved.</p>
          <p>Greenwood, IN · Remote Available</p>
        </div>
      </div>
    </footer>
  );
}
