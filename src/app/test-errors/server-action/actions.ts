"use server";

export async function triggerServerActionError() {
  // Simulate some async work
  await new Promise((resolve) => setTimeout(resolve, 100));

  throw new Error("App Router: Server Action error");
}

