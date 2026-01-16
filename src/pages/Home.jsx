const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32">

        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 text-xs tracking-widest text-blue-400 border border-blue-400/30 rounded-full">
          SENIOR FULL-STACK DEVELOPER
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Senior Full-Stack{" "}
          <span className="text-blue-500">Java Developer</span>
          <br />
          & Tech Lead
        </h1>

        {/* Professional Summary */}
        <div className="mt-10 max-w-4xl">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Professional Summary
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I am a <span className="text-white font-medium">Senior Full-Stack Java Developer & Tech Lead</span> with{" "}
            <span className="text-white font-medium">11+ years of experience</span>{" "}
            building and delivering{" "}
            <span className="text-white font-medium">
              enterprise-grade, multi-tier web applications
            </span>{" "}
            across <span className="text-white font-medium">
              Banking, Payments, E-commerce, Logistics, and Travel
            </span>{" "}
            domains.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I specialize in designing and developing{" "}
            <span className="text-white font-medium">scalable backend systems</span>{" "}
            using <span className="text-white font-medium">
              Core Java, Spring Boot, and Microservices
            </span>, along with modern frontend applications using{" "}
            <span className="text-white font-medium">React.js</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I have strong expertise across the complete{" "}
            <span className="text-white font-medium">
              Software Development Life Cycle (SDLC)
            </span>{" "}
            including requirement analysis, system design, development, testing,
            deployment, and production support. I have worked in{" "}
            <span className="text-white font-medium">Agile environments</span>,
            collaborated with <span className="text-white font-medium">
              global teams
            </span>, and successfully delivered projects in{" "}
            <span className="text-white font-medium">
              offshore and distributed models
            </span>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-full border border-gray-600 hover:border-white transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="max-w-6xl mx-auto px-6 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Years Experience", value: "11+" },
          { label: "Projects Delivered", value: "60+" },
          { label: "Teams Mentored", value: "15+" },
          { label: "Industries Worked", value: "5+" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-white/10 rounded-xl p-6 backdrop-blur"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
