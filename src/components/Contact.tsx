"use client";

import { useState } from "react";
import {
  FiMail,
  FiLinkedin,
  FiMessageCircle,
  FiFacebook,
  FiSend,
  FiCheck,
  FiX,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "arakash022@gmail.com",
    href: "mailto:arakash022@gmail.com",
    color: "blue",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/md-akash-mia-bd",
    href: "http://linkedin.com/in/md-akash-mia-bd",
    color: "blue",
  },
  {
    icon: FiMessageCircle,
    label: "WhatsApp",
    value: "+8801790291061",
    href: "https://wa.me/8801790291061",
    color: "green",
  },
  {
    icon: FiFacebook,
    label: "Facebook",
    value: "facebook.com/arakash022",
    href: "https://www.facebook.com/arakash022",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/40",
    text: "text-blue-600 dark:text-blue-400",
    hover: "hover:border-blue-400 dark:hover:border-blue-600",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/40",
    text: "text-green-600 dark:text-green-400",
    hover: "hover:border-green-400 dark:hover:border-green-600",
  },
};

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-black">
      {showToast && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 shadow-lg shadow-green-500/10 animate-slide-in">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">
            <FiCheck size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-300">Message Sent!</p>
            <p className="text-xs text-green-600 dark:text-green-400">I&apos;ll get back to you soon.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-2 p-1 rounded-lg text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
          >
            <FiX size={16} />
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi?
              Feel free to reach out through any of the following channels.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const c = colorMap[item.color];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 ${c.hover} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${c.bg} ${c.text}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Send a <span className="text-blue-600 dark:text-blue-400">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-colors"
              >
                <FiSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
