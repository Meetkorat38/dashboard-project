import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL!}/chartData`);
    const contentType = response.headers.get('content-type');
    
    if (!response.ok) {
      console.error('Fetch request failed:', response.statusText);
      return NextResponse.json({ error: 'Failed to fetch data' });
    }

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      const text = await response.text();
      console.error('Unexpected response format:', text);
      return NextResponse.json({ error: 'Unexpected response format' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' });
  }
}
