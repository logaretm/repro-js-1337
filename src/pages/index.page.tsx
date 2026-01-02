import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Sentry Next.js Error Test App
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Testing mixed Pages Router + App Router error reporting
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/test-errors"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View All Error Tests
          </Link>
          <Link
            href="/sentry-example-page"
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Sentry Example Page
          </Link>
        </div>

        <div className="mt-12 text-left max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Quick Reference:
          </h2>
          <div className="grid gap-2 text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-blue-600">App Router:</strong> /test-errors/*, /api/test, /api/post-error, /api/async-error
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-green-600">Pages Router:</strong> /pages-test/*, /api/hello, /api/pages-post-error
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
