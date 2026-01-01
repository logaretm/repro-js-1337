import { NextResponse } from "next/server";

export async function POST() {
  // Simulate some async work
  await new Promise((resolve) => setTimeout(resolve, 100));

  throw new Error("App Router: Route Handler POST error");
}

export async function GET() {
  return NextResponse.json({ message: "Use POST to trigger error" });
}

