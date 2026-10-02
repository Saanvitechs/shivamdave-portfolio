import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const TopNavbar = () => {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "about";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (id) =>
    `block lg:inline-block px-4 py-2 rounded-lg text-base lg:text-xl xl:text-2xl transition
     ${
       active === id
         ? "bg-zinc-800 text-yellow-400"
         : "text-zinc-400 hover:text-white hover:bg-zinc-800"
     }`;

  return (
    <nav className="relative z-40">
      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between bg-zinc-900 p-3 lg:p-4  border-zinc-800">

        {/* 🔹 Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-zinc-300 hover:text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* 🔹 Desktop Menu */}
        <div className="hidden lg:flex gap-2 items-center justify-end w-full">
  <a href="#about" className={navItem("about")}>About</a>
  <a href="#projects" className={navItem("projects")}>Projects</a>
  <a href="#skills" className={navItem("skills")}>Skill</a>
  {/* <a href="#contact" className={navItem("contact")}>Contact</a> */}

  <a
    href="#contact"
    className="px-4 bg-yellow-500 text-black text-xl xl:text-2xl py-1 whitespace-nowrap rounded-lg font-semibold hover:bg-yellow-600 transition text-center"
  >
   Contact Us
  </a>
</div>

      </div>

      {/* 🔹 Mobile Dropdown */}
      {open && (
        <div className="lg:hidden mt-2 bg-zinc-900 relative z-50 p-4 rounded-2xl border border-zinc-800 space-y-2">
          <a onClick={() => setOpen(false)} href="#about" className={navItem("about")}>About</a>
          <a onClick={() => setOpen(false)} href="#projects" className={navItem("projects")}>Works</a>
          <a onClick={() => setOpen(false)} href="#skills" className={navItem("skills")}>Skill</a>
          {/* <a onClick={() => setOpen(false)} href="#contact" className={navItem("contact")}>Contact</a> */}

          <a onClick={() => setOpen(false)} href="#contact" className="block w-full mt-2 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition text-center">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
