import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Cache revalidation time in seconds
export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    // Add timeout to prevent long-running queries
    const testimonials = await Promise.race([
      prisma.testimonial.findMany({
        select: {
          id: true,
          name: true,
          position: true,
          photo: true,
          description: true,
        },
        take: 10, // Limit results to prevent large payloads
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Query timeout')), 5000)
      ),
    ]) as any;

    // Return with cache headers
    const response = NextResponse.json(testimonials);
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return response;
  } catch (error) {
    console.error('Testimonials API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, position, photo, description } = body;

    if (!name || !position) {
      return NextResponse.json(
        { error: 'Missing required fields: name, position' },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        position,
        photo: photo || null,
        description: description || null
      }
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error('Create testimonial error:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
