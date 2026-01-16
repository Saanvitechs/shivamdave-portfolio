import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-zinc-700 transition ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
