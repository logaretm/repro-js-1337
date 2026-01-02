async function fetchExternalData() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  throw new Error("App Router: Route Handler async error (in helper function)");
}

export async function GET() {
  await fetchExternalData();

  return new Response("This should not be returned");
}

