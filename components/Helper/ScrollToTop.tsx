"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // 1️⃣ Handle refresh → go to top + remove hash
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    if (window.location.hash) {
      history.replaceState(null, "", pathname);
    }
  }, [pathname]);

  // 2️⃣ Toggle button visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 3️⃣ Button click scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-950/70 hover:bg-blue-900
          text-white rounded-full w-12 h-12
          flex items-center justify-center
          transition-all duration-300
          animate-pulse"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
