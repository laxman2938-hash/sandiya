import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Cache-Control': 'public, max-age=60, s-maxage=60',
};

export async function GET() {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json(clients, { headers });
  } catch (error) {
    console.error('Clients API error:', error);
    return NextResponse.json([], { status: 500, headers });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { headers });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, logo } = body;

    if (!name || !logo) {
      return NextResponse.json(
        { error: 'Missing required fields: name, logo' },
        { status: 400 }
      );
    }

    const client = await prisma.client.create({
      data: { name, logo }
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error('Create client error:', error);
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 }
    );
  }
}
