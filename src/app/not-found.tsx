import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center space-y-6">
        <h1 className="text-[10rem] sm:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white -mt-4">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-blue-600/25 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
