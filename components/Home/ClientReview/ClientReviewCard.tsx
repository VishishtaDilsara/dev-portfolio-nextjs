import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
  review: string;
};

const ClientReviewCard = ({ name, image, role, review }: Props) => {
  return (
    <div
      className="m-4 p-6 sm:p-8 rounded-2xl
      bg-[#0f172a]
      border border-white/10
      transition-all duration-300 ease-out
      hover:border-cyan-400/40
      hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)]"
    >
      {/* Review */}
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        “{review}”
      </p>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-white/10" />

      {/* Client Info */}
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full border border-white/10"
        />

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-cyan-300">
            {name}
          </h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
