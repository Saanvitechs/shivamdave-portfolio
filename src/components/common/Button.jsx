import React from "react";

const Button = ({ children, variant = "primary" }) => {
  const base =
    "px-6 py-2 rounded-xl text-sm font-medium transition";

  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",
    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
