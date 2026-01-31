"use client";
import Tilt from "react-parallax-tilt";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "30th Jan 2026",
    image: "/badges/aws-ccp.png",
    verifyUrl:
      "https://www.credly.com/badges/a16c7026-df43-4e5e-b8ec-ebd8c2ed3f3b/public_url",
  },
  {
    title: "FinOps Certified Practitioner",
    issuer: "The Linux Foundation",
    issued: "03rd Jan 2026",
    image: "/badges/finops.png",
    verifyUrl:
      "https://www.credly.com/badges/58b80853-6ad0-4358-bc95-7722111b6872/public_url",
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    issued: "05th Oct 2025",
    image: "/badges/aviatrix.png",
    verifyUrl:
      "https://www.credly.com/badges/33b3e1d5-e6b8-4142-b52e-82ddca17b7e6/public_url",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-[12vh] text-white pt-16 pb-16"
    >
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        Verified <span className="text-cyan-300">Badges</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {certifications.map((cert, index) => (
          <Tilt key={cert.title} scale={1.05} transitionSpeed={400}>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="bg-[#14134145] w-72 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-28 h-28 object-contain mb-4"
              />

              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>

              <p className="text-sm text-purple-400 mt-1">
                Issued by {cert.issuer}
              </p>

              <div className="mt-3 px-3 py-1 rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs text-cyan-300">
                Issued: {cert.issued}
              </div>

              <span className="text-xs text-cyan-300 mt-3 underline">
                Verify Credential
              </span>
            </a>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
