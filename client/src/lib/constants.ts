export const SITE_TITLE = "Andrew Kittridge - Full Stack Web Developer";
export const SITE_DESCRIPTION = "Portfolio website of Andrew Kittridge, a Full-Stack Web Developer specializing in Java, Spring, and Enterprise Solutions";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/andrew-kittridge-162779a7/",
  github: "https://github.com/andrewkittridge",
  email: "andrewkittridge@icloud.com",
  phone: "219-707-7775"
};

export const SKILLS_CATEGORIES = {
  languages: ["Java", "JavaScript", "TypeScript"],
  webTechnologies: [
    "Spring Boot (MVC, Security, Data)", 
    "Spring MVC", 
    "Spring Security", 
    "Spring Data JPA",
    "Struts", 
    "jQuery", 
    "RESTful APIs", 
    "SOAP", 
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
  tools: [
    "Maven", 
    "Git", 
    "Agile (Scrum, Kanban)", 
    "STIG Compliance", 
    "Secret Security Clearance",
    "Oracle SQL Developer",
    "Oracle Enterprise Manager",
    "Jenkins CI/CD",
    "Docker",
    "Microservices Architecture",
    "Cursor (AI pair programming, refactors, tests)"
  ],
  personal: [
    "React", 
    "LLM API Integration (x.ai Grok API)", 
    "Node.js", 
    "Express.js",
    "iOS (SwiftUI, Xcode, TestFlight/App Store Connect)",
    "Agentic coding workflows (LLM planning/execution)"
  ]
};

export const EXPERIENCE = [
  {
    title: "Senior Web Developer / Team Lead",
    company: "MetroStar",
    location: "Reston, VA",
    period: "November 2022 – Present",
    achievements: [
      "Team lead and senior developer for USMC platforms (MROWS, MCPDT), tightening orders and travel flows for operators.",
      "Deliver STIG-compliant Spring Boot services that automate approval and entitlement workflows, improving throughput by ~25%.",
      "Cut Oracle SQL latency ~30% via targeted query refactors, indexing, and instrumentation to surface slow paths.",
      "Led Struts-to-Spring Boot service migration, improving maintainability by ~20% and unblocking faster release cadence.",
      "Mentor engineers on Spring/React patterns and reviews; shortened onboarding by ~40% with pairing and playbooks."
    ]
  },
  {
    title: "Founder & Builder",
    company: "Lumin Faith",
    location: "Indianapolis, IN",
    period: "November 2024 – Present",
    url: "https://apps.apple.com/us/app/lumin-faith-bible-ai/id6754889412",
    achievements: [
      "Designed, engineered, and shipped Lumin Faith (SwiftUI) to the App Store: AI faith conversations, daily verses, study plans, and prayer journal.",
      "Built premium tier (higher AI limits, advanced insights, cloud sync) with respectful notifications, widgets, and liturgical season awareness.",
      "Integrated x.ai Grok API and agentic workflows (Cursor) to generate study prompts, refine copy, and accelerate QA; shipped via TestFlight iterations."
    ]
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    location: "Fairfax, VA",
    period: "July 2018 – November 2022",
    achievements: [
      "Built and maintained DTMS (USMC document/training tracking), balancing feature delivery with strict uptime goals.",
      "Refined jQuery/HTML5 UI flows that reduced user error rates by ~10% and lowered ticket volume.",
      "Shipped STIG-compliant Java/Spring components in secure environments with consistent audit pass rates.",
      "Worked in agile squads to triage and resolve production issues quickly, keeping essential systems stable."
    ]
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    location: "Arlington, VA",
    period: "July 2017 – July 2018",
    achievements: [
      "Supported large Struts-to-Spring migration efforts, pairing with senior engineers to improve scalability and performance.",
      "Provided application support for DTMS and UDMIPS deployment-logistics tooling, maintaining reliability for operational teams."
    ]
  }
];

export const EDUCATION = {
  degree: "B.S. in Computer Science",
  institution: "University of Indianapolis",
  location: "Indianapolis, IN",
  graduationDate: "May 2017",
  description: ""
};

export const PERSONAL_PROJECTS = [
  {
    title: "Lumin Faith",
    status: "Solo build · App Store",
    url: "https://apps.apple.com/us/app/lumin-faith-bible-ai/id6754889412",
    description: "AI-guided, Christ-centered Bible companion built end-to-end: Scripture study, prayer journaling, and reflective prompts designed, engineered, and shipped solo.",
    highlights: [
      "AI Faith Conversations: warm, Christ-centered responses across devotional, historical, applicational, Christ-centered, contemplative modes.",
      "Personalized daily verses and guided study plans (book-by-book and theme-based) with quizzes and progress tracking.",
      "Prayer journal with AI prompts and reflective analysis for insights and gratitude capture.",
      "Liturgical season awareness (Advent, Lent, Easter) plus gentle habits like streaks, respectful notifications, and serene widgets.",
      "LuminFaith Premium: unlocks higher AI limits, advanced insights, and ad-free experience with cloud sync and priority updates.",
      "SwiftUI + Xcode pipeline from prototype through TestFlight to App Store with agentic workflows (Cursor + x.ai Grok API)."
    ]
  }
];
