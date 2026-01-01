import type { GetServerSideProps } from "next";

type Props = {
  shouldError: boolean;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const trigger = context.query.trigger === "true";

  return {
    props: {
      shouldError: trigger,
    },
  };
};

function ErrorComponent() {
  throw new Error("Pages Router: SSR render error in component");
  return <div>This should not render</div>;
}

export default function SSRRenderErrorPage({ shouldError }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">SSR Render Error Test</h1>
      {shouldError ? (
        <ErrorComponent />
      ) : (
        <p className="mt-4">
          <a
            href="/pages-test/ssr-render-error?trigger=true"
            className="text-blue-500 underline"
          >
            Click here to trigger the error
          </a>
        </p>
      )}
    </div>
  );
}

