import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description: string;
};

const ResumeCard = ({ role, Icon, date, description }: Props) => {
  return (
    <div
      className="mb-6 p-5 sm:p-8 rounded-2xl
      bg-[#0f172a]
      border border-white/10
      transition-all duration-300 ease-out
      hover:border-cyan-400/40
      hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)]"
    >
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl
          bg-cyan-400/10 flex items-center justify-center shrink-0"
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {date && (
            <span
              className="inline-block mb-2 px-4 py-1 rounded-full
              text-xs sm:text-sm font-semibold
              bg-white/10 text-gray-300"
            >
              {date}
            </span>
          )}

          <h2 className="text-lg sm:text-xl font-semibold text-white">
            {role}
          </h2>

          <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
