import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/config/db.prisma.js'

export async function GET() {
    const query = await prisma.listEmail.findMany()
    return NextResponse.json({'message': query})
}

export function POST() {
    
	return NextResponse.json({'message':'uploading files...'})
}