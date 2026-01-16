import React from "react";
import Card from "../common/Card";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="flex gap-4 items-start">
      <div className="p-3 bg-zinc-800 rounded-xl text-yellow-400">
        <Icon size={26} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 mt-1">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default ServiceCard;
