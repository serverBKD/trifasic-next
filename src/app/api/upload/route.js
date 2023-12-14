import { NextResponse } from 'next/server'

export function GET() {
	return NextResponse.json({'message':'uploading files...'})
}

export function POST() {
	return NextResponse.json({'message':'uploaded files...'})
}