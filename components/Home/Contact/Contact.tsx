"use client";

import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!name || !email || !message) {
      toast.error("Please fill Name, Email and Message");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service not configured");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          mobile: mobile,
          message: message,
        },
        { publicKey }
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[12vh] pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight">
            Let’s schedule a call and build something impactful
          </h1>

          <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl">
            I’m currently accepting new projects and would love to hear about
            your ideas, challenges, and goals.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiPhone className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                +94 761 673 391
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiEnvelope className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                vishishtadilsara2002@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <BiMap className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300">
                No. 01, Indigasketiya, Baddegama
              </p>
            </div>
          </div>

          <div className="flex items-center mt-10 space-x-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
              <FaFacebookF className="w-5 h-5 text-gray-300" />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
              <FaLinkedin className="w-5 h-5 text-gray-300" />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
              <FaInstagram className="w-5 h-5 text-gray-300" />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
              <FaGithub className="w-5 h-5 text-gray-300" />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
              <FaBehance className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-3.5 bg-[#363659] mt-6 text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
          ></textarea>

          <button
            onClick={sendMessage}
            disabled={loading}
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
