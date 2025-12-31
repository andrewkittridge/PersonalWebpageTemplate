export const SITE_TITLE = "Andrew Kittridge | Full-Stack Java Developer";
export const SITE_DESCRIPTION =
  "Portfolio for Andrew Kittridge — Full-Stack Java Developer specializing in enterprise modernization, secure systems, and AI integrations.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/andrew-kittridge-162779a7/",
  github: "https://github.com/andrewkittridge",
  email: "andrewkittridge@icloud.com",
  phone: "219-707-7775"
};

export const SKILLS_CATEGORIES = {
  programming: [
    "Java",
    "JavaScript",
    "TypeScript"
  ],
  webTech: [
    "Spring Boot (MVC, Security, Data JPA)",
    "Spring MVC",
    "REST & SOAP APIs",
    "Microservices architecture",
    "Node.js & Express.js",
    "React"
  ],
  database: [
    "Oracle SQL & PL/SQL",
    "Database design & optimization",
    "SQL performance tuning",
    "Oracle Forms & Reports"
  ],
  tools: [
    "Maven",
    "Git & Jenkins CI/CD",
    "Docker",
    "Agile (Scrum/Kanban)",
    "STIG compliance",
    "Secret Security Clearance"
  ],
  personalProjects: [
    "LLM API integrations",
    "AI copilots",
    "Progressive Web Apps"
  ]
};

export const EXPERIENCE = [
  {
    title: "Full-Stack Web Developer",
    company: "MetroStar",
    location: "Reston, VA",
    period: "November 2022 – Present",
    achievements: [
      "Led full-stack development for the Marine Resource Orders Writing Service (MROWS) to automate personnel deployment orders, reservations, and resource allocation using Java/Spring Boot with Oracle databases.",
      "Engineered secure, scalable solutions for the Marine Corps Permanent Duty Travel system with RESTful APIs, Spring Security, and PL/SQL validation to handle entitlements, reimbursements, and compliance.",
      "Optimized high-volume Oracle interactions with tuned SQL, indexing strategies, and Spring Data JPA, improving responsiveness for mission-critical workflows.",
      "Directed migrations from Struts monoliths to Spring Boot microservices using Docker and Jenkins CI/CD for faster deployments and better maintainability.",
      "Mentored teams on Spring MVC, REST/SOAP services, and frontend enhancements while enforcing STIG standards in classified environments."
    ]
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    location: "Fairfax, VA",
    period: "July 2018 – November 2022",
    achievements: [
      "Built and maintained the Document Tracking and Management System (DTMS) with Spring Boot and Oracle PL/SQL for secure document storage, retrieval, and auditing.",
      "Enhanced interfaces with JavaScript, jQuery, Thymeleaf, and HTML5/CSS3 integrated with RESTful endpoints to deliver responsive, role-based workflows.",
      "Implemented STIG-compliant features using Spring Security for OAuth/JWT, encryption, and vulnerability scanning to meet DoD mandates.",
      "Collaborated in Agile teams using Git, Scrum, and Kanban to deliver API integrations and maintain uninterrupted availability for USMC systems."
    ]
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    location: "Arlington, VA",
    period: "July 2017 – July 2018",
    achievements: [
      "Refactored Struts/JSP monoliths into Spring Boot with MVC patterns, Spring Data JPA, and optimized Oracle schemas to improve performance.",
      "Developed Java modules for deployment planning and logistics tracking with PL/SQL aggregation and Oracle Forms/Reports visualizations."
    ]
  }
];

export const EDUCATION = {
  degree: "B.S. in Computer Science",
  institution: "University of Indianapolis",
  location: "Indianapolis, IN",
  graduationDate: "May 2017",
  description:
    "Studied algorithms, databases, and networked systems with a focus on Java. Led capstones that simulated production delivery with code reviews and Agile ceremonies."
};

export const PERSONAL_PROJECTS = [
  {
    title: "Lumin Faith",
    status: "Independent · Ongoing",
    description:
      "AI-enhanced PWA that reimagines Bible study with React 19, TypeScript, Firebase, and Material UI—serving 500+ users with real-time sync.",
    highlights: [
      "Integrated LLM APIs for scripture analysis, prayer reflections, and contextual insights.",
      "Built prayer journal and community collaboration features with Firebase Auth, Firestore, and Cloud Functions.",
      "Delivered 90+ Lighthouse scores via code-splitting, lazy loading, and PWA optimizations.",
      "Implemented CI/CD on Vercel with Vitest, ESLint, and accessibility-first UX."
    ]
  }
];
