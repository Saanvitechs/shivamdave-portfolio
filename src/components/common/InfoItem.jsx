import React from "react";

const InfoItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-zinc-300">
      <Icon size={18} className="text-yellow-400" />
      <div>
        <p className="text-xs text-zinc-500 uppercase">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;
