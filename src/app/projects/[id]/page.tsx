import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiStar,
  FiUsers,
  FiZap,
  FiArrowLeft,
  FiBookOpen,
  FiCheckCircle,
  FiAlertTriangle,
} from "react-icons/fi";
import projectsData from "../../../../public/projects/projects.json";

export function generateStaticParams() {
  return projectsData.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.name} | Akash`, description: project.subtitle };
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.projects.find((p) => p.id === id);
  if (!project) notFound();

  const coverSrc = project.media.coverImage.replace("/public", "");
  const screenshotSrcs = project.media.screenshots.map((s) => s.replace("/public", ""));

  return (
    <section className="w-full min-h-screen py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <FiArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={coverSrc}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600/80 backdrop-blur-sm text-white">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/80 backdrop-blur-sm text-white">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.slug}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                About this project
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiZap size={20} className="text-blue-600 dark:text-blue-400" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(project.featured).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900"
                  >
                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {key.replace(/-/g, " ")}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiCheckCircle size={20} className="text-green-600 dark:text-green-400" />
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiAlertTriangle size={20} className="text-amber-600 dark:text-amber-400" />
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenge.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FiCalendar size={16} className="text-blue-600 dark:text-blue-400" />
                Timeline
              </h3>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <p>Start: {new Date(project.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                <p>End: {new Date(project.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[11px] font-medium rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                Metrics
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FiStar size={18} className="mx-auto text-amber-500 mb-1" />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{project.metrics.stars}</p>
                  <p className="text-[10px] text-gray-500">Stars</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FiUsers size={18} className="mx-auto text-blue-500 mb-1" />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{project.metrics.users}</p>
                  <p className="text-[10px] text-gray-500">Users</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <FiZap size={18} className="mx-auto text-green-500 mb-1" />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{project.metrics.performanceScore}</p>
                  <p className="text-[10px] text-gray-500">Score</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                Links
              </h3>
              <div className="space-y-2">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.links.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiGithub size={16} />
                  Client Repo
                </a>
                <a
                  href={project.links.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiGithub size={16} />
                  Server Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {screenshotSrcs.map((src, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <Image src={src} alt={`${project.name} screenshot ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
