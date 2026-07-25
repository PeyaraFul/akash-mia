import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Akash Mia. All Rights Reserved. Built with
            <FiHeart size={14} className="text-red-500 fill-red-500" />
          </p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:arakash022@gmail.com"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FiMail size={18} />
            </a>
            <a
              href="http://linkedin.com/in/md-akash-mia-bd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/PeyaraFul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.facebook.com/arakash022"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
