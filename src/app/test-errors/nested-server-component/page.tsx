// Parent server component that renders a child that throws

function ChildComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("App Router: Nested Server Component error (child)");
  }
  return <div>Child rendered successfully</div>;
}

function MiddleComponent({ shouldThrow }: { shouldThrow: boolean }) {
  return (
    <div>
      <h2>Middle Component</h2>
      <ChildComponent shouldThrow={shouldThrow} />
    </div>
  );
}

export default async function NestedServerComponentErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ trigger?: string }>;
}) {
  const params = await searchParams;
  const shouldThrow = params.trigger === "true";

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Nested Server Component Error Test</h1>
      {shouldThrow ? (
        <MiddleComponent shouldThrow={true} />
      ) : (
        <p className="mt-4">
          <a
            href="/test-errors/nested-server-component?trigger=true"
            className="text-blue-500 underline"
          >
            Click here to trigger the error
          </a>
        </p>
      )}
    </div>
  );
}

