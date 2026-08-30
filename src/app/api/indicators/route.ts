import { NextResponse } from 'next/server';
import { getStrategicIndicators } from '@/lib/indicators';

export async function GET() {
  try {
    const indicators = await getStrategicIndicators();
    return NextResponse.json({
      success: true,
      total: indicators.length,
      data: indicators
    });
  } catch (error) {
    console.error('Error in /api/indicators:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal mengambil data indikator dari database' },
      { status: 500 }
    );
  }
}