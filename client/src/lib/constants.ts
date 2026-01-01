export const SITE_TITLE = "Andrew Kittridge | Full-Stack Java Developer";
export const SITE_DESCRIPTION = "Full-Stack Java Developer specializing in Enterprise Application Modernization, Secure Systems, and AI Integrations. 8+ years experience with U.S. Marine Corps and federal agencies.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/andrew-kittridge-162779a7/",
  github: "https://github.com/andrewkittridge",
  email: "andrewkittridge@icloud.com",
  phone: "219-707-7775",
  website: "andrewkittridge.com"
};

export const SKILLS_CATEGORIES = {
  languages: ["Java", "JavaScript", "TypeScript"],
  backend: [
    "Spring Boot (MVC, Security, Data JPA)",
    "Spring MVC",
    "Spring Security",
    "RESTful APIs",
    "SOAP Web Services",
    "Struts",
    "Microservices Architecture"
  ],
  frontend: [
    "React",
    "jQuery",
    "HTML5",
    "CSS3",
    "Thymeleaf",
    "JSP"
  ],
  database: [
    "Oracle SQL",
    "PL/SQL",
    "Oracle Database Administration",
    "SQL Performance Tuning",
    "Database Design & Optimization",
    "Oracle Forms & Reports"
  ],
  devops: [
    "Maven",
    "Git",
    "Jenkins CI/CD",
    "Docker",
    "Agile (Scrum, Kanban)",
    "Oracle SQL Developer",
    "Oracle Enterprise Manager"
  ],
  security: [
    "STIG Compliance",
    "Secret Security Clearance"
  ],
  emerging: [
    "Node.js",
    "Express.js",
    "LLM API Integration"
  ]
};

export const EXPERIENCE = [
  {
    title: "Full-Stack Web Developer",
    company: "MetroStar",
    location: "Reston, VA",
    period: "November 2022 – Present",
    achievements: [
      "Lead full-stack development for U.S. Marine Corps enterprise platforms, including the Marine Resource Orders Writing Service (MROWS)—a comprehensive system for automating personnel deployment orders, reservations, and resource allocation using Java/Spring Boot backend services integrated with Oracle databases.",
      "Engineer secure, scalable solutions for the Marine Corps Permanent Duty Travel (MCPDT) system, handling travel entitlements, reimbursements, and compliance tracking through RESTful APIs, Spring Security for authentication/authorization, and PL/SQL procedures for data validation and auditing.",
      "Optimize database interactions in high-volume environments by designing efficient Oracle SQL queries, implementing indexing strategies, and utilizing Spring Data JPA for ORM, resulting in enhanced system responsiveness and data integrity.",
      "Direct the full lifecycle migration of legacy Struts-based applications to modern Spring Boot microservices, incorporating Docker for containerization, Jenkins for CI/CD automation, and Maven for dependency management.",
      "Collaborate in cross-functional Agile teams to mentor developers on best practices in Spring MVC, REST/SOAP web services, and frontend enhancements, while ensuring adherence to STIG security standards."
    ]
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    location: "Fairfax, VA",
    period: "July 2018 – November 2022",
    achievements: [
      "Developed and maintained the Document Tracking and Management System (DTMS), a full-stack Java application for secure storage, retrieval, and auditing of official USMC documents and training records, leveraging Spring Boot for backend logic and Oracle PL/SQL for complex stored procedures.",
      "Enhanced user interfaces with responsive frontend technologies including JavaScript, jQuery, Thymeleaf templates, and HTML5/CSS3, integrated with backend RESTful endpoints to provide seamless, role-based access controls.",
      "Implemented STIG-compliant security features using Spring Security for OAuth/JWT authentication, encryption of sensitive data, and vulnerability scanning, ensuring 100% alignment with DoD cybersecurity mandates.",
      "Participated in Agile sprints utilizing Git for version control, Scrum ceremonies for planning, and Kanban for workflow management to resolve defects and maintain uninterrupted availability of core USMC systems."
    ]
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    location: "Arlington, VA",
    period: "July 2017 – July 2018",
    achievements: [
      "Supported large-scale application modernization efforts, including refactoring Struts/JSP monoliths into Spring Boot frameworks with MVC patterns, Spring Data JPA for database abstraction, and optimized Oracle SQL schemas.",
      "Provided backend and database expertise for the Unit Deployment Management Information Processing System (UDMIPS), developing Java-based modules for deployment planning, logistics tracking, and reporting, integrated with PL/SQL for data aggregation."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Indianapolis",
  location: "Indianapolis, IN",
  graduationDate: "May 2017",
  description: ""
};

export const PERSONAL_PROJECTS = [
  {
    title: "Lumin Faith",
    status: "iOS App · App Store",
    url: "https://apps.apple.com/us/app/lumin-faith-bible-ai/id6754889412",
    description: "An AI-enhanced Progressive Web Application that reimagines Bible study as an interactive spiritual journey, empowering believers to explore scripture and deepen their faith through modern technology.",
    highlights: [
      "Full-stack React 19 + TypeScript with Firebase (Firestore, Auth, Cloud Functions) and Material-UI",
      "AI/LLM API integration for scripture analysis, prayer reflections, and theological discussions",
      "Prayer journal system with AI-generated reflections, intelligent tagging, and cross-device sync",
      "Community collaboration platform with small group management and real-time updates",
      "90+ Lighthouse scores through code-splitting, lazy loading, and PWA optimization",
      "Comprehensive DevOps pipeline with CI/CD via Vercel, Vitest testing, and ESLint standards"
    ]
  }
];
