const skills = {
  "Programming Languages": [
    "Core Java",
    "Java 8",
    "J2EE 1.7",
    "J2EE 1.8",
    "JavaScript (ES6)",
    "Python",
  ],

  "Web Technologies": [
    "React.js",
    "HTML5",
    "CSS3",
    "JSP",
    "JavaScript",
    "Redux",
  ],

  "Frameworks & Libraries": [
    "Spring Framework",
    "Spring Boot",
    "Spring MVC",
    "Struts Framework",
    "Hibernate",
    "Microservices Architecture",
  ],

  "Cloud & DevOps": [
    "AWS",
    "Azure DevOps",
    "Azure Kubernetes Service (AKS)",
    "Azure Pipelines",
    "Docker",
    "CI/CD Pipelines",
  ],

  "Messaging & Streaming": [
    "Apache Kafka",
  ],

  "Databases": [
    "PostgreSQL",
  ],

  "Servers & Containers": [
    "Oracle WebLogic 10.3.6",
    "Oracle WebLogic 10.3.3",
    "Apache Tomcat",
  ],

  "Build & Version Control": [
    "Maven",
    "Gradle",
    "Git",
    "Jenkins",
  ],

  "Testing & Quality": [
    "JUnit",
    "Test Driven Development (TDD)",
    "Jest",
    "Playwright",
    "Vitest",
  ],

  "Scripting & Automation": [
    "Shell Scripting",
    "Batch Scripting",
    "PowerShell",
  ],

  "Architecture & Practices": [
    "Microservices Design",
    "REST API Design",
    "Secure API Development",
    "Encryption & Decryption",
    "Performance Optimization",
    "Production Monitoring",
  ],

  "Leadership & Collaboration": [
    "Tech Lead (8+ Member Teams)",
    "Team Mentoring",
    "Code Reviews",
    "Agile / Scrum",
    "Stakeholder Communication",
    "Story Grooming",
  ],
};

const Skills = () => {
  return (
    <div className="min-h-screen text-white px-24 pt-2 pb-32 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Skills</h1>
        <p className="text-gray-400 mt-4 max-w-3xl text-lg">
          A comprehensive overview of technologies, tools, and leadership
          capabilities gained over 12+ years of building enterprise-grade
          software across banking, payments, e-commerce, travel, and logistics.
        </p>
      </section>

      {/* SKILLS GRID */}
      <section className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition"
          >
            <h2 className="text-xl font-semibold mb-6">{category}</h2>

            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm bg-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Skills;
