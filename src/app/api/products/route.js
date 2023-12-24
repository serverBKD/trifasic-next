/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/db.prisma.js'

export async function GET() {
	const query = await prisma.product.findMany()
	console.log(query)
	return NextResponse.json({'message': query})
}

export async function POST(NextRequest,response) {
	const {
		model,
		fullname,
		description,
		trademark,
		price_base,
		price_sell,
		warehouse,
		img,
		category,
		divisa,
		dimension,
		tags,
		weigth,
		nota,
		serial,
		barcode,
		sku,
		stock,
		unity
	}= await NextRequest.json()
	const newProduct = await prisma.product.create({
		data: {
			model,
			fullname,
			description,
			trademark,
			price_base,
			price_sell,
			warehouse,
			img,
			category,
			divisa,
			dimension,
			tags,
			weigth,
			nota,
			serial,
			barcode,
			sku,
			stock,
			unity
		}
	})
	if (!newProduct) return
    
	console.log(newProduct)
	return NextResponse.json({'message':'Product created'})
}