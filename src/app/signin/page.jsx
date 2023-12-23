'use client'

import { useState } from 'react'

export default function login() {
	const [credential, setCredential] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setCredential({
			...credential,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const response = await fetch('api/login', {
			method: 'POST',
			data: credential,
		})
		console.log(response)
	}

	return (
		<section className='w-full min-h-screen bg-slate-900 grid place-content-center'>
			<form onSubmit={handleSubmit} className='py-1 px-3 bg-slate-700'>
				<h1>Login</h1>
				<div className='flex justify-between gap-x-3 my-2'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={handleChange}
					/>
				</div>
				<div className='flex justify-between gap-x-3 my-2'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={handleChange}
					/>
				</div>
				<div className='w-full text-center my-3'>
					<button className='w-full bg-[#0086C3] text-[#EFCA0A]'>
						Login
					</button>
				</div>
			</form>
		</section>
	)
}
