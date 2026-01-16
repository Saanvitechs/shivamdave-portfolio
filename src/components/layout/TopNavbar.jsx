import React, { useEffect, useState } from "react";

const TopNavbar = () => {
    const [active, setActive] = useState("about");

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
        `px-4 py-2 rounded-lg text-2xl transition
     ${active === id
            ? "bg-zinc-800 text-yellow-400"
            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
        }`;

    return (
        <span className="flex justify-end gap-2 bg-zinc-900 p-4 rounded-bl-2xl rounded-tr-2xl border-b-4 border-l-4 border-zinc-800">
            <a href="#about" className={navItem("about")}>About</a>
            <a href="#projects" className={navItem("projects")}>Works</a>
            <a href="#skills" className={navItem("skills")}>Skill</a>
            <a href="#contact" className={navItem("contact")}>Contact</a>

            <a
                href="#contact"
            // className="w-32 bg-yellow-500 text-black rounded-lg font-semibold text-2xl hover:bg-yellow-600 transition text-center"
            >
                {/* Hire Me */}
            </a>

            <button className="w-32 bg-yellow-500 text-black text-2xl pb-1 rounded-lg font-semibold hover:bg-yellow-600 transition"> Hire Me </button>

        </span>

    );
};

export default TopNavbar;
