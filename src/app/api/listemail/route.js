import { NextResponse } from 'next/server'
import { prisma } from '@/config/db.prisma.js'

export async function GET() {
	const query = await prisma.listEmail.findMany()
	return NextResponse.json({'message': query})
}

export async function POST(req,res) {
	try {
		const {
			fullname,
			formName,
			email,
			tel
		}= await req.json()
		const newLeak = await prisma.listEmail.create({
			data: {
				fullname,
				formName,
				email,
				tel
			}
		})
		if (!newLeak) return res.status(400).json({ 'message': 'error' })
		console.log(newLeak)
	} catch (error) {
		console.log(error)
	}
	return NextResponse.json({'message':'registro creado'})
}