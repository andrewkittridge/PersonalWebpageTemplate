export const SITE_TITLE = "Andrew Kittridge | Web Developer";
export const SITE_DESCRIPTION = "Web Developer with 8+ years of experience building and modernizing mission-critical enterprise systems for the U.S. Marine Corps. Currently supporting USMC Technology Services Organization (TSO) platforms that serve 205,000+ Marines and process $590M+ in annual PCS spending.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/andrew-kittridge-162779a7/",
  github: "https://github.com/andrewkittridge",
  email: "andrewkittridge@icloud.com",
  phone: "219-707-7775",
  website: "andrewkittridge.com"
};

export const SKILLS_CATEGORIES = {
  languages: ["Java", "JavaScript", "PL/SQL"],
  backend: [
    "Spring Boot (MVC, Security, Data JPA)",
    "RESTful APIs",
    "SOAP Web Services",
    "Struts",
    "Microservices"
  ],
  frontend: [
    "jQuery",
    "HTML5",
    "CSS3",
    "JSP"
  ],
  database: [
    "Oracle SQL",
    "PL/SQL",
    "Oracle DBA",
    "SQL Performance Tuning",
    "Database Design",
    "Oracle Forms & Reports"
  ],
  devops: [
    "Maven",
    "Git",
    "Jenkins CI/CD",
    "Agile (Scrum, Kanban)",
    "Oracle SQL Developer",
    "Oracle Enterprise Manager"
  ],
  security: [
    "STIG Compliance",
    "Secret Security Clearance",
    "AWS Certified Developer – Associate (in progress)"
  ]
};

export const EXPERIENCE = [
  {
    title: "Web Developer",
    company: "MetroStar",
    location: "Indianapolis, IN",
    period: "November 2022 – Present",
    achievements: [
      "Develop and maintain the Marine Resource Orders Writing Service (MROWS), a mission-critical platform serving 205,000+ Marines that automates personnel deployment orders, reservations, and resource allocation through Java/Spring Boot services integrated with Oracle databases.",
      "Led ICAM (Identity, Credential, and Access Management) integration for MROWS, modernizing authentication and authorization to satisfy DoD identity mandates and harden the platform's security posture.",
      "Drove the migration of core MROWS modules from legacy Struts to Spring Boot, eliminating technical debt and significantly improving code quality, maintainability, and long-term supportability of the codebase.",
      "Architected the SLOA (Sub-Line of Accounting) implementation with MCTFS, enabling accurate financial tracking and audit compliance for personnel deployment operations across the Marine Corps.",
      "Deliver ongoing enhancements to the Marine Corps Permanent Duty Travel (MCPDT) system, which processes 95,000+ orders and ~$590M in PCS spending annually.",
      "Tune high-volume Oracle SQL queries, implement indexing strategies, and leverage Spring Data JPA to improve system responsiveness and data integrity across mission-critical workflows.",
      "Mentor 2 new developers on Spring MVC, REST/SOAP web services, jQuery/HTML5/CSS3, and STIG compliance standards in classified environments."
    ]
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    location: "Fairfax, VA",
    period: "July 2018 – November 2022",
    achievements: [
      "Built and maintained the Document Tracking and Management System (DTMS), a full-stack Java application integrated into Marine Online that enables IPAC and disbursing offices Corps-wide to track travel claims, PCS/PPM reimbursements, and pay documents in real time.",
      "Delivered responsive frontends with JavaScript, jQuery, and HTML5/CSS3, wired to Spring Boot RESTful endpoints with role-based access controls and real-time data synchronization.",
      "Hardened applications to 100% STIG compliance using Spring Security (OAuth/JWT), data encryption, and automated vulnerability scanning — meeting all DoD cybersecurity mandates.",
      "Operated in Agile sprints (Scrum/Kanban) to resolve defects, integrate third-party APIs, and maintain uninterrupted availability of core USMC operational systems."
    ]
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    location: "Arlington, VA",
    period: "July 2017 – July 2018",
    achievements: [
      "Refactored Struts/JSP monoliths into Spring Boot with MVC patterns, Spring Data JPA, and optimized Oracle SQL schemas — establishing the modernization playbook later applied at GDIT and MetroStar.",
      "Developed Java modules and PL/SQL reporting for the Unit Diary/Manpower Integrated Personnel System (UD/MIPS), the Marine Corps' core personnel administration tool that feeds MCTFS and manages records for 205,000+ Marines."
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
    status: "iOS/iPadOS App · App Store",
    url: "https://apps.apple.com/us/app/lumin-faith-bible-ai/id6754889412",
    description: "Independently designed, built, and shipped a production SwiftUI app from concept to App Store release — a Bible study companion for iPhone and iPad with AI-powered features and a premium subscription model.",
    highlights: [
      "Built with SwiftUI, Firebase (Auth, Firestore, Cloud Functions), and a StoreKit 2 premium subscription model",
      "Integrated LLM-powered features including contextual multi-mode AI conversations, verse-by-verse scripture study, guided prayer experiences, and sermon reflection journeys",
      "Architected secure cloud workflows with TypeScript Firebase Cloud Functions, secret-managed API keys, authentication, and user-scoped data storage/sync",
      "Implemented engagement and UX systems including streaks/milestones, home screen widgets, Live Activities, dark/light theme settings, on-device speech transcription, and accessibility support (VoiceOver, Dynamic Type, reduced motion)"
    ]
  }
];
