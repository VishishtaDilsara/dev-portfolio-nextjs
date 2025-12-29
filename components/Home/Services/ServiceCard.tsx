import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div
      className="h-full p-8 rounded-2xl bg-[#0f172a]
      border border-white/10
      flex flex-col
      transition-all duration-300 ease-out
      hover:border-cyan-400/40
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10">
        <Image src={icon} alt={name} width={32} height={32} />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-xl font-semibold text-gray-100">{name}</h1>

      {/* Description  */}
      <p className="mt-4 text-sm leading-relaxed text-gray-400 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
