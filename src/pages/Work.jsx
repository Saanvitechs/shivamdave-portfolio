const projects = [
  {
    title: "Advanced Platform",
    client: "Bank of America, USA",
    duration: "Apr 2015 – Oct 2017",
    team: "6 Members",
    role: "Java Developer",
    description:
      "Enterprise platform for displaying filtered financial rates with secure file exchange using MIME protocol.",
    highlights: [
      "Verified and documented project requirements & business specs",
      "Developed POJO and business layer components",
      "Implemented file encryption & decryption modules",
      "Maintained production stability and performance",
    ],
    tech: [
      "Core Java",
      "Spring",
      "Hibernate",
      "JSP",
      "JavaScript",
      "WebLogic",
      "Maven",
      "Gradle",
    ],
  },

  {
    title: "Eclipse System Management Service (ESMS)",
    client: "Citi Bank, Malaysia",
    duration: "Oct 2017 – Jul 2019",
    team: "2 Members",
    role: "Backend Engineer",
    description:
      "Ticket and request tracking system for Citi Bank customers related to cards and accounts.",
    highlights: [
      "Developed backend services for ESMS",
      "Resolved QC issues and production bugs",
      "Handled BAU & OPPM support activities",
      "Maintained CI/CD pipelines with Jenkins",
    ],
    tech: [
      "Core Java",
      "Spring Boot",
      "Microservices",
      "JSP",
      "Apache Tomcat",
      "Linux",
      "Jenkins",
    ],
  },

  {
    title: "IBM HCL Maximo Reporting Tool",
    client: "IBM",
    duration: "Jul 2019 – Feb 2020",
    team: "2 Members",
    role: "Frontend Engineer",
    description:
      "Custom reporting tool for workforce accounting in IBM Maximo.",
    highlights: [
      "Built report creation features in React",
      "Collaborated with IBM Maximo team",
      "Fixed bugs in Maximo application",
    ],
    tech: ["React.js", "JavaScript", "ES6", "jQuery", "HTML", "CSS"],
  },

  {
    title: "British Airways Portal",
    client: "British Airways",
    duration: "Mar 2020 – Jun 2020",
    team: "5 Members",
    role: "Full Stack Developer",
    description:
      "Microservices and frontend development for airline ticket booking platform.",
    highlights: [
      "Developed backend APIs using Spring Boot",
      "Worked on multiple user stories",
      "Applied JUnit & Test Driven Development",
    ],
    tech: [
      "Spring Boot",
      "Spring MVC",
      "Microservices",
      "JUnit",
      "React.js",
      "Apache Kafka",
    ],
  },

  {
    title: "Open Payment Framework",
    client: "Mizuho Europe",
    duration: "Jun 2020 – Sep 2021",
    team: "5 Members",
    role: "Tech Lead",
    description:
      "Payment processing framework for multiple financial institutions using FIS OPF.",
    highlights: [
      "Led a team of 3 engineers",
      "Enhanced Struts-based APIs",
      "Performed root cause analysis & fixes",
      "Modernized legacy architecture",
    ],
    tech: [
      "Core Java",
      "Struts",
      "Spring",
      "Kafka",
      "Docker",
      "Azure DevOps",
      "Angular 8",
    ],
  },

  {
    title: "Nike Teams Platform",
    client: "Nike US",
    duration: "Nov 2021 – May 2022",
    team: "5 Members",
    role: "Tech Lead",
    description:
      "Platform for bulk custom uniform creation with backend APIs and React frontend.",
    highlights: [
      "Led team of 4 engineers",
      "Developed backend & frontend features",
      "Handled deployment & environments",
    ],
    tech: [
      "Spring Boot",
      "React.js",
      "Kafka",
      "Docker",
      "Azure DevOps",
    ],
  },

  {
    title: "Interswitch Payment Gateway",
    client: "Interswitch, South Africa",
    duration: "May 2022 – Oct 2022",
    team: "5 Members",
    role: "Tech Lead",
    description:
      "Quickteller payment application for bill payments and transfers.",
    highlights: [
      "Developed Java APIs",
      "Mentored team of 4 engineers",
      "Enhanced payment workflows",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "AWS",
      "React.js",
      "PostgreSQL",
    ],
  },

  {
    title: "Tupperware Portal",
    client: "Tupperware, Australia",
    duration: "Oct 2022 – May 2023",
    team: "3 Members",
    role: "Tech Lead",
    description:
      "E-commerce portal for product purchases across Australia.",
    highlights: [
      "Developed backend features",
      "Mentored junior developers",
      "Enhanced user flows",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "React.js",
      "Azure Kubernetes",
      "Playwright",
    ],
  },

  {
    title: "East West Bank Portal",
    client: "East West Bank",
    duration: "May 2023 – Oct 2023",
    team: "5 Members",
    role: "Tech Lead",
    description:
      "Banking portal with production monitoring and feature enhancements.",
    highlights: [
      "Handled production incidents",
      "Worked on blockchain integrations",
      "Led 4-member team",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "Blockchain",
      "React.js",
      "Azure DevOps",
    ],
  },

  {
    title: "Wayfair Portal",
    client: "Wayfair",
    duration: "Nov 2023 – Nov 2024",
    team: "8 Members",
    role: "Tech Lead",
    description:
      "Enterprise portal with scalable backend APIs and modern frontend views.",
    highlights: [
      "Led team of 8 engineers",
      "Designed backend architecture",
      "Ensured delivery & code quality",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "React.js",
      "Azure Kubernetes",
      "PostgreSQL",
    ],
  },

  {
    title: "DHL Delivery Portal",
    client: "DHL",
    duration: "Nov 2024 – Apr 2025",
    team: "8 Members",
    role: "Tech Lead",
    description:
      "Logistics delivery management system with real-time workflow enhancements.",
    highlights: [
      "Developed backend APIs",
      "Groomed user stories",
      "Planned architecture & flows",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "React.js",
      "Docker",
      "PlantUML",
    ],
  },

  {
    title: "LGI Portal",
    client: "LGI",
    duration: "May 2025 – Present",
    team: "6 Members",
    role: "Tech Lead",
    description:
      "Enterprise portal with modern backend & React-based frontend.",
    highlights: [
      "Developed Java & React features",
      "Led 8-member team",
      "Enhanced system performance",
    ],
    tech: [
      "Spring Boot",
      "Kafka",
      "React.js",
      "AWS",
      "Microservices",
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen text-white px-6 md:px-12 pt-20 pb-32 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-24 relative">
        {/* Accent Line */}
        {/* <div className="absolute -left-6 top-6 h-16 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" /> */}

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          My <span className="text-yellow-400">Work</span> 
        </h1>

        <p className="text-gray-400 max-w-3xl text-lg md:text-xl leading-relaxed">
          A selection of enterprise platforms and products I’ve built and led across
          banking, payments, e-commerce, travel, and logistics over{" "}
          <span className="text-white font-medium">12+ years</span>.
        </p>
      </div>


      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/40"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col gap-3 mb-4">
                <h2 className="text-2xl font-semibold">{p.title}</h2>
                <span className="text-sm text-[#FFDB70]">{p.duration}</span>
              </div>

              <p className="text-gray-300 mb-4">
                <span className="text-blue-500 font-bold text-2xl ">{p.client}</span> •{" "}
                {p.role} • Team: {p.team}
              </p>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-2 text-gray-400 mb-6 list-disc list-inside">
                {p.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20 transition"
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
