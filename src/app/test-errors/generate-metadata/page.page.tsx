import type { Metadata } from "next";

type Props = {
  searchParams: Promise<{ trigger?: string }>;
};

// This generateMetadata function throws an error when triggered
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;

  if (params.trigger === "true") {
    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 50));
    throw new Error("App Router: generateMetadata error");
  }

  return {
    title: "Generate Metadata Error Test",
  };
}

export default async function GenerateMetadataErrorPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Generate Metadata Error Test</h1>
      {params.trigger === "true" ? (
        <p>If you see this, the metadata generation succeeded (it shouldn&apos;t have)</p>
      ) : (
        <p className="mt-4">
          <a
            href="/test-errors/generate-metadata?trigger=true"
            className="text-blue-500 underline"
          >
            Click here to trigger the error
          </a>
        </p>
      )}
    </div>
  );
}

