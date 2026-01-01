// This is a Server Component that throws an error during render
// Using searchParams to trigger error only at runtime, not during build

export default async function ServerComponentErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ trigger?: string }>;
}) {
  const params = await searchParams;

  if (params.trigger === "true") {
    throw new Error("App Router: Server Component render error");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Server Component Error Test</h1>
      <p className="mt-4">
        <a
          href="/test-errors/server-component?trigger=true"
          className="text-blue-500 underline"
        >
          Click here to trigger the error
        </a>
      </p>
    </div>
  );
}

