import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FiMonitor, FiServer, FiDatabase } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    icon: FiMonitor,
    color: "blue",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#ffffff" },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    color: "green",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000", darkColor: "#ffffff" },
    ],
  },
  {
    title: "Database",
    icon: FiDatabase,
    color: "purple",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
];

const colorStyles: Record<string, { border: string; bg: string; iconBg: string; text: string }> = {
  blue: {
    border: "border-blue-200 dark:border-blue-900",
    bg: "from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-950",
    iconBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
    text: "text-blue-600 dark:text-blue-400",
  },
  green: {
    border: "border-green-200 dark:border-green-900",
    bg: "from-green-50 to-white dark:from-green-950/30 dark:to-gray-950",
    iconBg: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
    text: "text-green-600 dark:text-green-400",
  },
  purple: {
    border: "border-purple-200 dark:border-purple-900",
    bg: "from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-950",
    iconBg: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
    text: "text-purple-600 dark:text-purple-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const c = colorStyles[category.color];
            return (
              <div
                key={category.title}
                className={`group p-8 rounded-2xl border ${c.border} bg-gradient-to-br ${c.bg} hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${c.iconBg}`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className={`text-xl font-bold ${c.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-3 p-3 rounded-xl ${category.color === "blue" ? "bg-blue-50" : category.color === "green" ? "bg-green-50" : "bg-purple-50"} dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 cursor-default`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={22} style={{ color: skill.color }} className="dark:hidden" />
                        <skill.icon size={22} style={{ color: skill.darkColor || skill.color }} className="hidden dark:block" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
