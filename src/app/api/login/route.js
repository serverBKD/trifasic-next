import { NextResponse } from 'next/server'

export async function GET(NextRequest, NextResponse) {
	return NextResponse.json({'message':'hola'})
}

export async function POST(NextRequest, NextResponse) {
	const { body } = await NextRequest.json()
	console.log(body)
	return NextResponse.json({'message':'ahora si bb'})
}