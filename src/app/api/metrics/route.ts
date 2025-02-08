import { NextResponse } from "next/server";

/*
 "metrics": {
      "totalstream": 150000,
      "activestream": 12000,
      "totalStreams": 4500000,
      "revenue": 1200000,
      "topArtist": "The Weeknd"
    },
 */

export async function GET() {
  const response = await fetch(`${process.env.BACKEND_URL!}/metrics`);
  const data = await response.json();
  return NextResponse.json(data);
}
