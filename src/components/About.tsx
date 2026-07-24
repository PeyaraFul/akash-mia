import Image from "next/image";
import {
  FiMessageSquare,
  FiZap,
  FiUsers,
  FiSearch,
  FiClipboard,
  FiGlobe,
  FiBookOpen,
  FiCoffee,
  FiHeart,
} from "react-icons/fi";

const journeyCards = [
  {
    icon: FiZap,
    title: "The Spark",
    description:
      "It all began when I completed a web development course. I still remember the thrill of seeing my first webpage come to life in the browser. That single moment of curiosity sparked something bigger — I was hooked.",
    color: "blue",
  },
  {
    icon: FiSearch,
    title: "Going Deeper",
    description:
      "What started as curiosity quickly became a passion. I dove deep into the MERN stack — learning React, Node.js, Express, and MongoDB. I spent countless hours building, breaking, and fixing things, and every challenge made me a stronger developer.",
    color: "purple",
  },
  {
    icon: FiClipboard,
    title: "Building Real Things",
    description:
      "I started turning knowledge into real projects — crafting responsive UIs with React and Tailwind, building robust APIs with Node and Express, and designing scalable databases with MongoDB. Every project taught me something new.",
    color: "pink",
  },
  {
    icon: FiMessageSquare,
    title: "Today",
    description:
      "Today, I'm a confident MERN stack developer who loves turning complex problems into clean, elegant solutions. I enjoy working full-stack and am always exploring new tools and ideas to build better experiences.",
    color: "green",
  },
];

const softSkills = [
  { icon: FiMessageSquare, title: "Communication" },
  { icon: FiZap, title: "Fast Learner" },
  { icon: FiUsers, title: "Teamwork" },
  { icon: FiSearch, title: "Problem Solving" },
  { icon: FiClipboard, title: "Management" },
];

const colorMap: Record<string, { border: string; bg: string; text: string; hover: string; shadow: string; iconBg: string }> = {
  blue: {
    border: "border-blue-200 dark:border-blue-900",
    bg: "from-blue-50 to-white dark:from-blue-950/50 dark:to-gray-950",
    text: "text-blue-600 dark:text-blue-400",
    hover: "hover:border-blue-400 dark:hover:border-blue-600",
    shadow: "hover:shadow-blue-500/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
  },
  purple: {
    border: "border-purple-200 dark:border-purple-900",
    bg: "from-purple-50 to-white dark:from-purple-950/50 dark:to-gray-950",
    text: "text-purple-600 dark:text-purple-400",
    hover: "hover:border-purple-400 dark:hover:border-purple-600",
    shadow: "hover:shadow-purple-500/10",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
  },
  pink: {
    border: "border-pink-200 dark:border-pink-900",
    bg: "from-pink-50 to-white dark:from-pink-950/50 dark:to-gray-950",
    text: "text-pink-600 dark:text-pink-400",
    hover: "hover:border-pink-400 dark:hover:border-pink-600",
    shadow: "hover:shadow-pink-500/10",
    iconBg: "bg-pink-100 dark:bg-pink-900/50",
  },
  green: {
    border: "border-green-200 dark:border-green-900",
    bg: "from-green-50 to-white dark:from-green-950/50 dark:to-gray-950",
    text: "text-green-600 dark:text-green-400",
    hover: "hover:border-green-400 dark:hover:border-green-600",
    shadow: "hover:shadow-green-500/10",
    iconBg: "bg-green-100 dark:bg-green-900/50",
  },
};

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                Programming <span className="text-blue-600 dark:text-blue-400">Journey</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {journeyCards.map((card) => {
                  const c = colorMap[card.color];
                  return (
                    <div
                      key={card.title}
                      className={`group p-6 rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} hover:shadow-xl ${c.shadow} ${c.hover} transition-all duration-300`}
                    >
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${c.iconBg} ${c.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {card.title}
                      </h4>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                When I&apos;m Not <span className="text-blue-600 dark:text-blue-400">Coding</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-2">
                    <FiGlobe size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Travelling</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 mb-2">
                    <FiBookOpen size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Reading</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 mb-2">
                    <FiCoffee size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Coffee Breaks</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-2">
                    <FiHeart size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Praying</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Exploring new places gives me fresh perspectives that I bring back
                into my work. I&apos;m an avid reader always looking to learn
                something new. A good coffee break recharges me, and praying keeps
                me grounded and focused.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative p-[5px] rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-blue-500/20">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-white dark:bg-black">
                <Image
                  src="/akash-reward.png"
                  alt="Akash Mia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
            My <span className="text-blue-600 dark:text-blue-400">Soft Skills</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.title}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={22} />
                </div>
                <h4 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
