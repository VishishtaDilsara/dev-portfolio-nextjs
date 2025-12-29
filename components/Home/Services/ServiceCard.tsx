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
      className="p-8 rounded-2xl bg-[#0f172a]
      border border-white/10
      transition-all duration-300 ease-out
      hover:border-cyan-400/40
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10">
        <Image src={icon} alt={name} width={32} height={32} />
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-100">{name}</h1>

      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
