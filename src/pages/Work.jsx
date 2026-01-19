const projects = [
  {
    title: "Nike Teams Platform",
    client: "Nike US",
    duration: "Nov 2021 – May 2022",
    team: "5 Members",
    role: "Senior Software Engineer",
    description:
      "Platform for bulk custom uniform creation.",
    highlights: [
      "Developed new features for uniform ordering workflows",
      "Implemented backend and frontend enhancements",
      "Supported environment setup and deployments",
      "Contributed to team execution and planning",
    ],
    tech: [
      "Java", "Spring Boot", "Struts MVC", "React.js", "Apache Kafka",
      "Microservices", "Hibernate", "Docker", "HTML", "CSS",
    ],
  },

  {
    title: "LGI Portal",
    client: "LGI",
    duration: "May 2025 – December 2025",
    team: "6 Members",
    role: "Senior Software Engineer / Tech Lead",
    description:
      "Enterprise-grade portal with scalable Spring Boot microservices and a modern React-based frontend.",
    highlights: [
      "Developed and enhanced Spring Boot REST APIs with clean, scalable architecture",
      "Built and improved React.js UI components/pages with smooth backend integration",
      "Handled end-to-end user stories from requirements to deployment readiness",
      "Led sprint delivery and mentored team members to ensure code quality and timelines",
    ],
    tech: [
      "Java", "Spring Boot", "Spring MVC", "Microservices", "React.js",
      "Apache Kafka", "Node.js", "Docker", "Azure DevOps", "PostgreSQL",
      "HTML5", "CSS3",
    ],
  },

  {
    title: "DHL Delivery Portal",
    client: "DHL",
    duration: "Nov 2024 – Apr 2025",
    team: "8 Members",
    role: "Senior Software Engineer / Tech Lead",
    description:
      "Logistics delivery management system with real-time workflow enhancements.",
    highlights: [
      "Developed backend services for delivery workflows using Java + Spring Boot",
      "Delivered sprint work items across backend APIs and frontend pages",
      "Led story grooming and implementation planning",
      "Maintained delivery quality and supported smooth releases as Tech Lead",
    ],
    tech: [
      "Java", "Spring Boot", "Microservices", "React.js", "Apache Kafka",
      "Node.js", "Docker", "Azure DevOps", "Swagger", "PostgreSQL",
      "HTML5", "CSS3",
    ],
  },

  {
    title: "Wayfair Portal",
    client: "Wayfair",
    duration: "Nov 2023 – Nov 2024",
    team: "8 Members",
    role: "Senior Software Engineer / Tech Lead",
    description:
      "Confidential enterprise portal with scalable backend APIs and modern frontend views.",
    highlights: [
      "Led backend + frontend delivery for enterprise portal",
      "Designed Spring Boot REST APIs for business-critical modules",
      "Handled production support and deployments",
      "Ensured consistent sprint outcomes as Tech Lead",
    ],
    tech: [
      "Java", "Spring Boot", "Spring MVC", "Microservices", "React.js",
      "Apache Kafka", "Docker", "Azure DevOps", "PostgreSQL",
      "HTML5", "CSS3",
    ],
  },

  {
    title: "East West Bank Portal",
    client: "East West Bank",
    duration: "Jun 2023 – Oct 2023",
    team: "5 Members",
    role: "Senior Software Engineer / Tech Lead",
    description:
      "Banking portal with production monitoring and feature enhancements.",
    highlights: [
      "Monitored production systems and resolved defects",
      "Delivered backend APIs and frontend enhancements",
      "Worked on user stories end-to-end",
      "Led team and ensured timely delivery",
    ],
    tech: [
      "Java", "Spring Boot", "Spring MVC", "React.js", "Node.js",
      "Apache Kafka", "Docker", "Azure DevOps", "PostgreSQL",
      "HTML5", "CSS3",
    ],
  },

  {
    title: "Tupperware Portal",
    client: "Tupperware Australia",
    duration: "Oct 2022 – Jun 2023",
    team: "3 Members",
    role: "Senior Software Engineer",
    description:
      "E-commerce portal for product purchases across Australia.",
    highlights: [
      "Developed backend functionality for ecommerce portal",
      "Implemented enhancements across APIs and frontend pages",
      "Mentored junior developers",
      "Worked on Kafka-based event-driven integrations",
    ],
    tech: [
      "Java", "Spring Boot", "Spring MVC", "Struts", "React.js",
      "Apache Kafka", "Microservices", "Hibernate", "Docker",
      "HTML5", "CSS3",
    ],
  },

  {
    title: "Interswitch Payment Gateway",
    client: "Interswitch, South Africa",
    duration: "May 2022 – Oct 2022",
    team: "5 Members",
    role: "Senior Software Engineer / Tech Lead",
    description:
      "Quickteller payment application for bill payments and transfers.",
    highlights: [
      "Developed backend APIs for payment workflows",
      "Worked on backend + frontend enhancements",
      "Mentored 4 engineers and ensured sprint delivery",
      "Built stable, scalable payment services",
    ],
    tech: [
      "Java", "Spring Boot", "Spring MVC", "React.js", "Apache Kafka",
      "Microservices", "AWS", "Docker", "PostgreSQL",
      "HTML5", "CSS3",
    ],
  },

  

  {
    title: "Open Payment Framework",
    client: "Mizuho Europe",
    duration: "Jun 2020 – Sep 2021",
    team: "5 Members",
    role: "Technical Specialist / Tech Lead",
    description:
      "Payment processing framework for multiple financial institutions.",
    highlights: [
      "Enhanced Java APIs and Struts-based services",
      "Performed root cause analysis and production fixes",
      "Led team delivery and ensured code quality",
      "Worked in Agile delivery with cross-team collaboration",
    ],
    tech: [
      "Java", "Struts MVC", "Spring Framework", "Microservices",
      "Apache Kafka", "Hibernate", "Docker", "Azure DevOps",
      "GraphQL", "HTML", "CSS",
    ],
  },

  {
    title: "British Airways Portal",
    client: "British Airways",
    duration: "Mar 2020 – Jun 2020",
    team: "5 Members",
    role: "Senior Software Engineer",
    description:
      "Airline ticket booking platform enhancements.",
    highlights: [
      "Developed backend APIs with Spring Boot",
      "Applied JUnit and TDD practices",
    ],
    tech: [
      "Java", "Spring Boot", "Microservices", "JUnit", "React.js",
    ],
  },

  {
    title: "IBM Reporting Tool",
    client: "IBM",
    duration: "Jul 2019 – Feb 2020",
    team: "2 Members",
    role: "Software Engineer",
    description:
      "Custom reporting tool for workforce accounting.",
    highlights: [
      "Built reporting modules in React",
      "Fixed application defects",
    ],
    tech: [
      "React.js", "JavaScript", "ES6", "jQuery", "HTML", "CSS", "Git",
    ],
  },

  {
    title: "ESMS Application",
    client: "Citi Bank, Malaysia",
    duration: "Oct 2017 – Jul 2019",
    team: "2 Members",
    role: "Software Engineer",
    description:
      "Customer request tracking system for cards and accounts.",
    highlights: [
      "Developed backend functionality",
      "Handled QC fixes and BAU/OPPM support",
      "Worked end-to-end on delivery",
    ],
    tech: [
      "Core Java", "Spring Boot", "Spring Framework", "Microservices",
      "JavaScript", "Apache Tomcat", "HTML", "CSS", "Linux", "Jenkins",
    ],
  },

  {
    title: "Advanced Platform",
    client: "Bank of America, USA",
    duration: "Apr 2015 – Oct 2017",
    team: "6 Members",
    role: "Software Engineer",
    description:
      "Enterprise platform for displaying filtered financial rates with secure file exchange.",
    highlights: [
      "Verified requirements and prepared documentation",
      "Developed POJO and business layer components",
      "Implemented MIME encryption & decryption logic",
    ],
    tech: [
      "Core Java", "Spring Framework", "Hibernate", "JavaScript",
      "JSP", "WebLogic Server", "HTML", "CSS",
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 pb-24 sm:pb-32 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 sm:mb-20 md:mb-24 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          My <span className="text-yellow-400">Work</span>
        </h1>

        <p className="text-gray-400 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
          A selection of enterprise platforms and products I've built and led across
          banking, payments, e-commerce, travel, and logistics over{" "}
          <span className="text-white font-medium">12+ years</span>.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/40"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold">{p.title}</h2>
                {/* <span className="text-xs sm:text-sm text-[#FFDB70]">{p.duration}</span> */}
              </div>

              {/* Meta */}
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                <span className="text-blue-500 font-semibold">{p.client}</span> •{" "}
                {p.role} • Team: {p.team}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                {p.description}
              </p>

              {/* What I Did / Highlights */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-base font-semibold text-[#FFDB70] mb-2">
                  What I Did (Key Responsibilities & Impact)
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-400 list-disc list-inside">
                  {p.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Work;