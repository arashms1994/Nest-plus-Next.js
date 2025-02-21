import { IProperty } from "@/type/serverTypes";
import React from "react";

const PropertyCard = (property: Partial<IProperty>) => {
  return (
        <div
        key={property.id}
        className="bg-slate-400 flex flex-col items-center justify-center rounded py-2 px-3"
      >
        <h3 className="font-normal text-sm text-white">{property.label}</h3>
        <p className="font-normal text-xs text-white">{property.name}</p>
      </div>
  );
};

export default PropertyCard;
