"use client";

import Link from "next/link";

export default function TestErrorsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Server-Side Error Test Suite
        </h1>

        {/* App Router Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            App Router Errors
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/test-errors/server-component?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Server Component Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                RSC that throws during render
              </p>
            </Link>

            <Link
              href="/test-errors/server-action"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Server Action Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Form action that throws
              </p>
            </Link>

            <Link
              href="/api/test"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Route Handler Error (GET)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                App Router API route error
              </p>
            </Link>

            <Link
              href="/test-errors/generate-metadata?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                generateMetadata Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Error during metadata generation
              </p>
            </Link>

            <Link
              href="/test-errors/nested-server-component?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Nested Server Component Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deeply nested RSC error
              </p>
            </Link>

            <Link
              href="/test-errors/async-server-component?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Async Server Component Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Async RSC that throws after await
              </p>
            </Link>

            <Link
              href="/api/post-error"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Route Handler POST Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                POST method route handler error
              </p>
            </Link>

            <Link
              href="/api/async-error"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Async Route Handler Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Error in async helper function
              </p>
            </Link>
          </div>
        </section>

        {/* Pages Router Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
            Pages Router Errors
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/api/hello"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Pages API Route Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pages Router API handler error
              </p>
            </Link>

            <Link
              href="/pages-test/gssp-error?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                getServerSideProps Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Error in GSSP function
              </p>
            </Link>

            <Link
              href="/pages-test/gsp-error"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                getStaticProps Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Error in GSP function (build time)
              </p>
            </Link>

            <Link
              href="/pages-test/ssr-render-error?trigger=true"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                SSR Render Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Error during SSR page render
              </p>
            </Link>

            <Link
              href="/api/pages-post-error"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 dark:text-white">
                Pages API POST Error
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                POST handler that throws
              </p>
            </Link>
          </div>
        </section>

        {/* Quick Test Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            Quick API Tests
          </h2>
          <div className="flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => fetch("/api/test").catch(console.error)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Trigger App Router API Error
            </button>
            <button
              type="button"
              onClick={() => fetch("/api/hello").catch(console.error)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Trigger Pages Router API Error
            </button>
            <button
              type="button"
              onClick={() =>
                fetch("/api/pages-post-error", { method: "POST" }).catch(
                  console.error
                )
              }
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Trigger Pages POST Error
            </button>
            <button
              type="button"
              onClick={() =>
                fetch("/api/post-error", { method: "POST" }).catch(
                  console.error
                )
              }
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Trigger App Router POST Error
            </button>
            <button
              type="button"
              onClick={() => fetch("/api/async-error").catch(console.error)}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Trigger Async Route Handler Error
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

