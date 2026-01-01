import type { GetServerSideProps } from "next";

type Props = {
  data: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const trigger = context.query.trigger === "true";

  if (trigger) {
    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 100));
    throw new Error("Pages Router: getServerSideProps error");
  }

  return {
    props: {
      data: "Data loaded successfully",
    },
  };
};

export default function GSSPErrorPage({ data }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">getServerSideProps Error Test</h1>
      <p>Data: {data}</p>
      <p className="mt-4">
        <a
          href="/pages-test/gssp-error?trigger=true"
          className="text-blue-500 underline"
        >
          Click here to trigger the error
        </a>
      </p>
    </div>
  );
}

