import React from "react";
import Card from "../common/Card";

const SkillCard = ({ name, level }) => {
  return (
    <Card>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white">{name}</span>
        <span className="text-zinc-400">{level}%</span>
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </Card>
  );
};

export default SkillCard;
