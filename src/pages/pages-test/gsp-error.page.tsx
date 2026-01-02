import type { GetStaticProps } from "next";

type Props = {
  data: string;
  buildTime: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Only throw during ISR revalidation, not initial build
  // This allows the build to succeed but errors on revalidation
  return {
    props: {
      data: "Static data from build",
      buildTime: new Date().toISOString(),
    },
    revalidate: 1, // Revalidate every second - will error on revalidation if triggered
  };
};

export default function GSPErrorPage({ data, buildTime }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">getStaticProps Test</h1>
      <p>Data: {data}</p>
      <p>Built at: {buildTime}</p>
      <p className="text-gray-600 mt-4">
        Note: This page uses ISR with revalidate=1. The GSP error test is disabled for deploy.
      </p>
    </div>
  );
}

