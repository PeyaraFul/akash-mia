import Image from "next/image";
import Link from "next/link";
import projectsData from "../../../public/projects/projects.json";

const projects = projectsData.projects;

export const metadata = {
  title: "Projects | Akash",
  description: "All projects by Akash Mia",
};

export default function ProjectsPage() {
  return (
    <section className="w-full min-h-screen py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            All <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A collection of projects I&apos;ve built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.media.coverImage.replace("/public", "")}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                  {project.slug}
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[11px] font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <Link
                    href={`/projects/${project.id}`}
                    className="px-5 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-300"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
