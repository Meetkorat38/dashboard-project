import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.BACKEND_URL!}/chartData`);
  const data = await response;
  return NextResponse.json(data);
}
