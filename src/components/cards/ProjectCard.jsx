import React from "react";
import Card from "../common/Card";

const ProjectCard = ({ image, title, category }) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />

      <div className="mt-4">
        <h3 className="text-white font-semibold">
          {title}
        </h3>
        <p className="text-sm text-zinc-400">
          {category}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
