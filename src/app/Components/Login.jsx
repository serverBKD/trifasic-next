'use client'
import { useForm } from 'react-hook-form'

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({})

	const onSubmit = handleSubmit(async (data) => {
		// const { email, password } = data
		console.log(data)
	})

	return (
		<section>
			<div>
				<form
					onSubmit={onSubmit}
					className='w-full flex flex-col gap-4 p-3 rounded-md shadow-lg shadow-indigo-700 bg-slate-600'
				>
					<h1>LOGIN</h1>
					<div className='w-full flex justify-between gap-x-3'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							{...register('email', {
								required: {
									value: true,
									message: 'Email is required',
								},
							})}
						/>
						{errors.email && <span>{errors.email.message}</span>}
					</div>

					<div className='w-full flex justify-between gap-x-3'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							className='text-black'
							{...register('password', {
								required: {
									value: true,
									message: 'Password is required',
								},
							})}
						/>
					</div>
					<div className='w-full text-center'>
						<button className='w-full bg-slate-800'>Login</button>
					</div>
				</form>
			</div>
		</section>
	)
}
