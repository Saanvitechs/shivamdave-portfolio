import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

// MainLayout Component
const MainLayout = ({ children }) => {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Content Wrapper (shifted right) */}
            <div
                className="min-h-screen ml-0 lg:ml-[332px]"
            >
                {/* Page Content */}
                <div className="px-3 sm:px-4 lg:px-8 pb-6 lg:pb-8 pt-20 lg:pt-10">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-x-clip">
                        <div className="sticky top-0 z-50 rounded-t-2xl bg-zinc-900">
                            <TopNavbar />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
