import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="w-10 h-1 bg-yellow-400 mt-2 rounded"></div>
    </div>
  );
};

export default SectionTitle;
