import axios from "axios";
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
  const response = await axios.get(`${process.env.BACKEND_URL!}/metrics`);
  const data = await response.data
  return NextResponse.json(data);
}
