import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const Sidebar = () => {
    return (
        <aside
            className="
            fixed
            top-10
            left-4
            w-[300px]
            h-[90vh]
          bg-[#1a1a1a]
            p-8
            flex
            flex-col
            items-center
            rounded-3xl
            shadow-lg
            overflow-y-auto
            z-50
         "
        >

            {/* Avatar Container */}
            <div className="relative bg-[#2a2a2a] rounded-3xl p-8 mb-6">
                <img
                    src="/avatar.png"
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl object-cover"
                />
                <span className="absolute bottom-8 right-8 w-4 h-4 bg-green-500 rounded-full border-2 border-[#2a2a2a]"></span>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-semibold text-white tracking-tight">
                Shivam Dave
            </h2>
            <span className="text-sm text-zinc-400 mt-2">
                Software Developer
            </span>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800 my-4"></div>

            {/* Info */}
            <div className="w-full space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="bg-[#2a2a2a] p-3 rounded-lg">
                        <Mail size={20} className="text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                            Email
                        </p>
                        <p className="text-sm text-zinc-300">
                            shivamdave@gmail.com
                        </p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="bg-[#2a2a2a] p-3 rounded-lg">
                        <Phone size={20} className="text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                            Phone
                        </p>
                        <p className="text-sm text-zinc-300">
                            +977 9812345678
                        </p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                    <div className="bg-[#2a2a2a] p-3 rounded-lg">
                        <MapPin size={20} className="text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                            Location
                        </p>
                        <p className="text-sm text-zinc-300">
                            Lucknow, India
                        </p>
                    </div>
                </div>
                <div className="">
                    <button className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-4 font-semibold hover:bg-yellow-600 transition">
                        Download CV
                    </button>
                    
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
                <div className="bg-[#2a2a2a] p-2.5 rounded-lg hover:bg-[#333] transition cursor-pointer">
                    <Linkedin size={20} className="text-zinc-400" />
                </div>
                <div className="bg-[#2a2a2a] p-2.5 rounded-lg hover:bg-[#333] transition cursor-pointer">
                    <Github size={20} className="text-zinc-400" />
                </div>
                <div className="bg-[#2a2a2a] p-2.5 rounded-lg hover:bg-[#333] transition cursor-pointer">
                    <Twitter size={20} className="text-zinc-400" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
