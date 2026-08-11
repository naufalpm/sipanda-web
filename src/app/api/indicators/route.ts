import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const indicators = await prisma.indicator.findMany({
      include: {
        dataPoints: {
          orderBy: { year: 'asc' }
        }
      }
    })
    return NextResponse.json({ success: true, data: indicators })
  } catch (error) {
    console.error('Error fetching indicators:', error)
    return NextResponse.json(
      { success: false, message: 'Gagal mengambil data indikator' },
      { status: 500 }
    )
  }
}