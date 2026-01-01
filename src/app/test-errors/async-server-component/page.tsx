// This is an async Server Component that throws after an await

async function fetchData() {
  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 100));
  throw new Error("App Router: Async Server Component error after await");
}

export default async function AsyncServerComponentErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ trigger?: string }>;
}) {
  const params = await searchParams;

  if (params.trigger === "true") {
    await fetchData();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Async Server Component Error Test</h1>
      <p className="mt-4">
        <a
          href="/test-errors/async-server-component?trigger=true"
          className="text-blue-500 underline"
        >
          Click here to trigger the error
        </a>
      </p>
    </div>
  );
}

