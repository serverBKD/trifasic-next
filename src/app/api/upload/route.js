import { NextResponse } from 'next/server'
import { SubirFiles } from '@/config/firebase.config.js'
import { writeFile } from 'fs/promises'
import path from 'path'

export function GET() {
	return NextResponse.json({'message':'uploading files...'})
}

export async function POST(request) {
	const data = await request.formData()
	const image = data.get('file')

	if (!image) {
		return NextResponse.json({'message':'no image'})
	}
	
	//. Convertir FormData en Buffer: Archivo cargado en Memoria RAM
	const bytes = await image.arrayBuffer()
	const buffer = Buffer.from(bytes)

	//. Guardar archivo en Carpeta Public
	const imagePath = `${new Date().getTime()}-x-${image.name}`
	const filePath = path.join(process.cwd(),'public','uploads',imagePath)
	await writeFile(filePath, buffer)
	
	//. Subir al Bucket Firebase
	const imageURL = await SubirFiles(buffer, image.name)
	console.log(imageURL)

	return new NextResponse.json(JSON.stringify({message: imageURL}))
}