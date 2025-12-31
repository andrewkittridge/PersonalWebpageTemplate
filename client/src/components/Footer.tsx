import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-black/70 to-black py-12 mt-6">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.6em] uppercase"
          >
            AK
          </Link>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl">
            Full-Stack Web Developer specializing in Java, Spring, Oracle SQL, and modern web experiences with accessibility, analytics, and security built in.
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

      <div className="page-shell mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
        © {currentYear} Andrew Kittridge · Modern web app delivery.
      </div>
    </footer>
  );
}
