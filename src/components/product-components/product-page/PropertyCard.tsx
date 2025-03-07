"use client";

import React from "react";

interface PropertyCardProps {
  id: string;
  name: string;
  label: string;
}

const PropertyCard = ({ id, name, label }: PropertyCardProps) => {
  return (
    <div className="bg-slate-400 flex flex-col items-center justify-center rounded py-2 px-3">
      <h3 className="font-normal text-sm text-white">{label}</h3>
      <p className="font-normal text-xs text-white">{name}</p>
    </div>
  );
};

export default PropertyCard;
