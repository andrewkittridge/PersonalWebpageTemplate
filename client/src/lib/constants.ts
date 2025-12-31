export const SITE_TITLE = "Andrew Kittridge | Mission-Grade Software";
export const SITE_DESCRIPTION =
  "A SpaceX-inspired mission page for Andrew Kittridge — building orbital-grade systems with Spring, React, and telemetry-first delivery.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/andrew-kittridge-162779a7/",
  github: "https://github.com/andrewkittridge",
  email: "andrewkittridge@icloud.com",
  phone: "219-707-7775"
};

export const SKILLS_CATEGORIES = {
  programming: [
    "Java (mission-critical)",
    "TypeScript",
    "Node.js",
    "Go"
  ],
  webTech: [
    "Spring Boot",
    "React + Vite",
    "Framer Motion",
    "Tailwind CSS",
    "Progressive Web Apps",
    "Design systems"
  ],
  database: [
    "Oracle SQL tuning",
    "PostgreSQL",
    "PL/SQL automation",
    "Caching + CDN strategy"
  ],
  tools: [
    "Observability (metrics + tracing)",
    "CI/CD flight checklists",
    "Security hardening (STIG)",
    "Secret Clearance"
  ],
  personalProjects: [
    "AI copilots",
    "Edge orchestration",
    "Telemetry dashboards"
  ]
};

export const EXPERIENCE = [
  {
    title: "Lead Full-Stack Engineer",
    company: "MetroStar",
    location: "Reston, VA",
    period: "November 2022 – Present",
    achievements: [
      "Rebuilt legacy Struts stacks into Spring Boot services with feature flags, staging envs, and observability—cutting release friction by 40%.",
      "Implemented performance budgets across React + Vite front ends, keeping mission-critical UI responses under 180ms on real data.",
      "Optimized Oracle SQL with tuned indexes and query plans, reducing heavy reports from minutes to seconds for field operators.",
      "Delivered STIG-compliant pipelines and access controls; paired code reviews with automated security gates for regulated deployments.",
      "Coached teams on telemetry-first delivery using runbooks, dashboards, and chaos drills to keep uptime in the green."
    ]
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    location: "Fairfax, VA",
    period: "July 2018 – November 2022",
    achievements: [
      "Upgraded defense apps with modern JavaScript and accessibility improvements, trimming user friction on mission workflows.",
      "Built secure Spring services for cleared environments with detailed logging, audit trails, and repeatable deployment scripts."
    ]
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    location: "Arlington, VA",
    period: "July 2017 – July 2018",
    achievements: [
      "Supported Struts-to-Spring migrations, helping enterprise teams modernize critical flows without downtime.",
      "Troubleshot secure enterprise applications and stabilized deployments with better monitoring and release playbooks."
    ]
  }
];

export const EDUCATION = {
  degree: "B.S. in Computer Science",
  institution: "University of Indianapolis",
  location: "Indianapolis, IN",
  graduationDate: "May 2017",
  description:
    "Studied algorithms, databases, and networked systems with a focus on Java. Led team capstones simulating production delivery, code reviews, and Agile ceremonies."
};

export const PERSONAL_PROJECTS = [
  {
    title: "Orbit Ops Copilot",
    status: "Independent · Ongoing",
    description:
      "An AI-assisted control panel that pairs LLM prompts with live metrics, guiding incident response and deployment playbooks.",
    highlights: [
      "Composable React components styled with Tailwind and motion primitives for cockpit feel.",
      "LLM integrations for runbook suggestions, with guardrails and human-in-loop confirmations.",
      "Data visualization hooks that read from mock telemetry streams for demos.",
      "Offline-ready PWA shell for field operations."
    ]
  }
];
