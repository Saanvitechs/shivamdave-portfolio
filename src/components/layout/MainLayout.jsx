import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const SIDEBAR_WIDTH = 300;

const MainLayout = ({ children }) => {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Content Wrapper (shifted right) */}
            <div
                className="min-h-screen"
                style={{ marginLeft: `${SIDEBAR_WIDTH}px` }}
            >
                {/* Page Content */}
                <div className="px-8 pb-8 pt-10">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl ">
                        <div className="flex justify-end sticky top-0 z-50 ">
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
