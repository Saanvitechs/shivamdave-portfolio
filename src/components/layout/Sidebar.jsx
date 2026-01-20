import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle,X } from "lucide-react";
// import profile from "../../assets/skills/aws.png"; // adjust path

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* 🔹 Mobile Profile Button */}
            <div className="md:hidden fixed top-4 left-4 z-[60]">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-[#1a1a1a] text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2"
                >
                    <img
                        src="/profile_photo.jpg"
                        alt="profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">Shivam</span>
                </button>
            </div>

            {/* 🔹 Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                ></div>
            )}

            {/* 🔹 Sidebar */}
            <aside
                className={`
          fixed top-4 md:top-10 left-4
          w-[280px] md:w-[300px]
          h-[90vh]
          bg-[#1a1a1a]
          p-6 md:p-8
          flex flex-col items-center
          rounded-3xl shadow-lg
          overflow-y-auto
          z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"}
        `}
            >
                {/* ❌ Close */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 md:hidden text-zinc-400 hover:text-white"
                >
                    <X size={22} />
                </button>

                {/* Avatar */}
                <div className="relative bg-[#2a2a2a] rounded-3xl p-8 mb-6">
                    {/* <div className="w-32 h-32 rounded-2xl bg-gray-700 flex items-center justify-center text-4xl text-white font-bold"> */}
                    <img
                        src="/profile_photo.jpg"
                        alt="profile"
                        className="w-29 h-29 rounded-full object-cover"
                    />
                    {/* </div> */}
                </div>

                <h2 className="text-2xl font-semibold text-white">Shivam Dave</h2>
                <span className="text-sm text-zinc-400 mt-2">Software Developer</span>

                <div className="w-full h-px bg-zinc-800 my-4"></div>

                <div className="w-full space-y-5">
                    <InfoItem icon={<Mail size={20} />} label="Email" value="Shivam.dave2591@gmail.com" />
                    <InfoItem icon={<Phone size={20} />} label="Phone" value="+91- 9580208231" />
                    <InfoItem icon={<MapPin size={20} />} label="Location" value="Lucknow, India" />

                    <a href="/Shivam_Java fullstack_contract.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-4 font-semibold hover:bg-yellow-600 transition">
                            Download CV
                        </button>
                    </a>


                </div>

                <div className="flex gap-3 mt-8">
                    <IconBox><Linkedin size={20} /></IconBox>
                    <IconBox><Github size={20} /></IconBox>
                    <IconBox><MessageCircle size={20} />  </IconBox>
                    <IconBox><Twitter size={20} /></IconBox>

                </div>
            </aside>
        </>
    );
};

/* 🔹 MUST be above export default */
const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-4">
        <div className="bg-[#2a2a2a] p-3 rounded-lg text-yellow-500">{icon}</div>
        <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-sm text-zinc-300">{value}</p>
        </div>
    </div>
);

const IconBox = ({ children }) => (
    <div className="bg-[#2a2a2a] p-2.5 rounded-lg hover:bg-[#333] transition cursor-pointer text-zinc-400">
        {children}
    </div>
);

export default Sidebar;
