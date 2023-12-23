/* eslint-disable no-unused-vars */
import { NextRequest,NextResponse } from 'next/server'

export function POST(NextRequest, response) {
	console.log(NextRequest.body)
	// return response.json({'message': 'query'})
	return response.json({'message':'Product created'})

}