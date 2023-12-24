/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req, res) {
	console.log(req.body)
	// return response.json({'message': 'query'})
	// return response.json({'message':'Product created'})
	return new Response.json({'message':'Product created'})

}