import { Code2, Database, Cloud, GitBranch, Users, Award, TrendingUp, Shield, Target, Rocket, Sparkles, Zap } from 'lucide-react';
import javaLogo from "../assets/skills/java.png";
import springLogo from "../assets/skills/Spring_Boot.png";
import react from "../assets/skills/react.gif";
import postman from "../assets/skills/postman.png";
import docker from "../assets/skills/docker.png";
import aws from "../assets/skills/aws.png";
import React, { useEffect, useRef } from "react";
// import postgres from "../assets/skills/postgres.gif";
// import kafka from "../assets/skills/kafka.gif";
import kubernetes from "../assets/skills/kubernetes.png";


const TechIcon = ({ type }) => {
  const icons = {
    java: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <path fill="#f44336" d="M28.187 29.155c-1.955-1.028-3.58.415-3.58.415s4.15-1.706 7.443.207c3.823 2.219 5.283 5.44 5.283 5.44s-3.213-4.066-9.146-6.062z" />
        <path fill="#f44336" d="M20.494 32.574c-1.96-1.028-3.584.415-3.584.415s4.154-1.706 7.45.207c3.826 2.219 5.287 5.44 5.287 5.44s-3.215-4.066-9.153-6.062z" />
        <path fill="#1565c0" d="M30.954 25.608s-8.094 1.902-4.083 3.093c1.678.498 5.024.383 8.146-.213 2.558-.488 5.122-1.527 5.122-1.527s-.902.387-1.55.835c-8.214 2.156-24.093 1.152-19.518-1.051 3.86-1.859 11.883-1.643 11.883-1.137z" />
        <path fill="#1565c0" d="M32.184 21.594c-9.337 2.413-10.24 2.33-14.706 1.094-1.762-.488-1.14-2.003-1.14-2.003s-6.662 3.45 6.19 4.9c7.018.791 16.916-.878 16.916-.878s-1.405.6-3.26.887z" />
        <ellipse fill="#1565c0" cx="25" cy="13" rx="15" ry="5.5" />
      </svg>
    ),
    react: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <circle cx="25" cy="25" r="4" fill="#61dafb" />
        <ellipse cx="25" cy="25" rx="18" ry="7" fill="none" stroke="#61dafb" strokeWidth="2" />
        <ellipse cx="25" cy="25" rx="18" ry="7" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 25 25)" />
        <ellipse cx="25" cy="25" rx="18" ry="7" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 25 25)" />
      </svg>
    ),
    spring: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <path fill="#6db33f" d="M25 5C13.95 5 5 13.95 5 25s8.95 20 20 20 20-8.95 20-20S36.05 5 25 5zm8.5 29.5c-2 2.5-5 4-8.5 4s-6.5-1.5-8.5-4c-1.5-2-2.5-4.5-2.5-7.5 0-1.5.3-3 .8-4.3l12.2 7 12.2-7c.5 1.3.8 2.8.8 4.3 0 3-1 5.5-2.5 7.5z" />
        <path fill="#6db33f" d="M37.5 21.5l-12.5 7.2-12.5-7.2c1.5-3 4.5-5.2 7.8-5.8 1-.2 2-.3 3.2-.3s2.2.1 3.2.3c3.3.6 6.3 2.8 7.8 5.8z" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <rect x="8" y="20" width="5" height="5" fill="#2496ed" />
        <rect x="14" y="20" width="5" height="5" fill="#2496ed" />
        <rect x="20" y="20" width="5" height="5" fill="#2496ed" />
        <rect x="26" y="20" width="5" height="5" fill="#2496ed" />
        <rect x="14" y="14" width="5" height="5" fill="#2496ed" />
        <rect x="20" y="14" width="5" height="5" fill="#2496ed" />
        <rect x="20" y="8" width="5" height="5" fill="#2496ed" />
        <path fill="#2496ed" d="M45 23c-1.5-1-3.5-1.3-5.5-1 0-2.5-1.5-4.5-3.5-5.5.5 3-1 5.5-3 7-3.5 2.5-8.5 2.5-12.5 2H6c-.5 5 1.5 9.5 5.5 12.5 3 2 7 3 11 3 11 0 20-5.5 23-15 2 0 4-1 4-3 0-.5-.2-1-.5-1.5z" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <path fill="#ff9900" d="M18 28c0 .5-.2 1-.5 1.3l-6 6c-.3.3-.8.5-1.3.5s-1-.2-1.3-.5l-6-6c-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8h3.3v-8.4c0-1 .8-1.8 1.8-1.8h3.4c1 0 1.8.8 1.8 1.8v8.4h3.3c1 0 1.8.8 1.8 1.8z" />
        <path fill="#ff9900" d="M32 15c-1 0-1.8-.8-1.8-1.8V9.8h-3.4c-1 0-1.8-.8-1.8-1.8V4.7c0-.5.2-1 .5-1.3l6-6c.3-.3.8-.5 1.3-.5s1 .2 1.3.5l6 6c.3.3.5.8.5 1.3V8c0 1-.8 1.8-1.8 1.8h-3.3v3.4c0 1-.8 1.8-1.8 1.8z" />
        <path fill="#252f3e" d="M13 38h24c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H13c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z" />
      </svg>
    ),
    postgres: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <ellipse cx="25" cy="15" rx="15" ry="8" fill="#336791" />
        <path fill="#336791" d="M10 15v12c0 4.4 6.7 8 15 8s15-3.6 15-8V15c0 4.4-6.7 8-15 8s-15-3.6-15-8z" />
        <path fill="#336791" d="M10 27v8c0 4.4 6.7 8 15 8s15-3.6 15-8v-8c0 4.4-6.7 8-15 8s-15-3.6-15-8z" />
      </svg>
    ),
    kafka: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <circle cx="25" cy="25" r="4" fill="#000" />
        <circle cx="25" cy="10" r="5" fill="#000" />
        <circle cx="40" cy="25" r="5" fill="#000" />
        <circle cx="25" cy="40" r="5" fill="#000" />
        <circle cx="10" cy="25" r="5" fill="#000" />
        <line x1="25" y1="15" x2="25" y2="21" stroke="#000" strokeWidth="2" />
        <line x1="25" y1="29" x2="25" y2="35" stroke="#000" strokeWidth="2" />
        <line x1="29" y1="25" x2="35" y2="25" stroke="#000" strokeWidth="2" />
        <line x1="15" y1="25" x2="21" y2="25" stroke="#000" strokeWidth="2" />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 50 50" className="w-10 h-10">
        <path fill="#326ce5" d="M25 5l18 10v20L25 45 7 35V15z" />
        <circle cx="25" cy="25" r="8" fill="#fff" />
        <path fill="#326ce5" d="M25 18l-3 5 3 2 3-2-3-5zm-6 9l5-3v-6l-5 3v6zm12 0v-6l-5-3v6l5 3zm-6 8l3-5-3-2-3 2 3 5z" />
      </svg>
    )
  };
  return icons[type] || <Code2 className="w-10 h-10 text-slate-400" />;
};



const technologies = [
  { name: 'Java', type: 'java' },
  { name: 'React', type: 'react' },
  { name: 'Spring', type: 'spring' },
  { name: 'Docker', type: 'docker' },
  { name: 'AWS', type: 'aws' },
  { name: 'PostgreSQL', type: 'postgres' },
  { name: 'Kafka', type: 'kafka' },
  { name: 'Kubernetes', type: 'kubernetes' }
];

const skills = [
  {
    name: "Java",
    img: javaLogo,
    link: "https://www.java.com/"
  },
  { name: "SpringBoot", img: springLogo, link: "" },
  { name: "React", img: react, link: "" },
  { name: "Postman", img: postman, link: "https://www.postman.com/" },
  { name: "Docker", img: docker, link: "" },
  { name: "AWS", img: aws, link: "" },
  { name: "kubernetes", img: kubernetes, link: "" },
];

const technology = [
  "Java 8+",
  "Spring Boot",
  "Spring MVC",
  "Hibernate/JPA",
  "Microservices",
  "Kafka",
  "React.js",
  "Docker",
  "CI/CD",
  "Azure DevOps",
  "PostgreSQL"
];

const About = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;
      scrollAmount += 1;
      container.scrollLeft = scrollAmount;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 overflow-hidden">

      <section className="max-w-6xl mx-auto relative">
        <div className="absolute -inset-1 rounded-3xl blur-2xl"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About <span className="text-yellow-400">Me</span>
        </h1>
        <div className="relative rounded-3xl ml-8">

          {/* Tagline */}
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            I’m a Senior Full-Stack Engineer (Java + React) with{" "}
            <span className="text-white font-semibold">11+ years</span> years of experience building scalable enterprise platforms. My core strength is designing and developing Spring Boot microservices, integrating systems using REST APIs and Apache Kafka, and delivering responsive UI experiences using React.js.
          </p>
          {/* Content */}
          <div className="space-y-5 text-zinc-300 mt-4 text-lg leading-relaxed max-w-4xl">
            <p>
              Over the years, I’ve contributed to business-critical platforms for global organizations such as <span className="text-blue-400 font-semibold">DHL, Wayfair, Nike, Mizuho, Citi Bank, Bank of America, and Tupperware.</span>  With 4+ years as a Tech Lead, I’ve mentored developers, driven sprint execution, ensured clean code practices, and taken ownership of end-to-end delivery.
            </p>

            <div className="space-y-2">
              <div className="">
                <p className="text-base leading-relaxed flex flex-wrap items-center gap-2">
                  <span className="text-blue-300 text-xl font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Tech Focus:
                  </span>
                  {technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 text-sm hover:border-blue-500 hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <p>
              As a Tech Lead, I’ve led teams, mentored engineers, and successfully
              delivered projects in{" "}
              <span className="text-white font-medium">
                Agile and distributed offshore models
              </span>,
              ensuring quality, scalability, and long-term maintainability.
            </p>
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-8 py-16">
        <h3 className="text-3xl font-bold text-white mb-12">
          What <span className="text-yellow-400">I’m Doing</span>
        </h3>

        <ul className="grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Java Full-Stack Developer",
              text: "High-quality, scalable websites built at a professional level.",
              icon: "/assets/images/icon-dev.svg",
            },
            {
              title: "Backend Architect",
              text: "Professional development of Android and iOS applications.",
              icon: "/assets/images/icon-app.svg",
            },
            {
              title: "System Design & Microservices",
              text: "Modern, intuitive designs focused on user experience.",
              icon: "/assets/images/icon-design.svg",
            },
            {
              title: "Backend Development",
              text: "High-performance backend systems designed for scalability.",
              icon: "/assets/images/icon-backend.svg",
            },
          ].map((service, i) => (
            <li
              key={i}
              className="flex gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/40 transition"
            >
              <div className="shrink-0">
                <img src={service.icon} alt={service.title} width="40" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-white mb-12">
          Experience <span className="text-blue-400">Highlights</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Full SDLC Ownership",
              description:
                "11+ years of hands-on experience across the complete software development lifecycle including requirement analysis, architecture design, development, testing, deployment, and production support.",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Technical Leadership",
              description:
                "4+ years as a Tech Lead managing cross-functional teams, mentoring engineers, conducting rigorous code reviews, and delivering high-impact projects on time.",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Domain Expertise",
              description:
                "Deep expertise in Banking and Payments systems, building secure, compliant, and high-volume transaction platforms for enterprise-grade applications.",
            },
          ].map((highlight, i) => (
            <div
              key={i}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-7
                   hover:border-blue-400/40 hover:-translate-y-1
                   transition-all duration-300 shadow-sm hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center
                        w-12 h-12 rounded-xl bg-blue-500/10
                        text-blue-400 group-hover:bg-blue-500/20 transition">
                {highlight.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*Skill icon Scroller  */}

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold text-white mb-5">Skills</h3>

        <ul
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory overscroll-x-contain scrollbar-hide"
        >
          {skills.map((skill, i) => (
            <li key={i} className="flex-shrink-0 snap-start">
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-52 h-56 rounded-2xl
                bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800
                hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-32 h-32 object-contain group-hover:scale-125 transition-transform"
                />
                <span className="absolute bottom-4 text-sm text-zinc-400 group-hover:text-white">
                  {skill.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>


      {/* KEY ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-white">Key Achievements</h2>

        <div className="space-y-4">
          {[
            "Successfully led migration of monolithic applications to microservices architecture, improving system scalability by 300%",
            "Designed and implemented high-throughput payment processing systems handling 10M+ transactions daily",
            "Mentored and developed 15+ junior and mid-level developers into productive team members",
            "Reduced application deployment time by 60% through implementation of CI/CD pipelines and automation",
            "Delivered 50+ projects on time across Banking, E-commerce, Logistics, and Travel domains"
          ].map((achievement, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-900 border border-slate-800 p-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            If you're looking for a reliable senior developer or tech lead who can own problems
            end-to-end and deliver enterprise-grade solutions, I'd be happy to discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;