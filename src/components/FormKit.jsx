'use client'
import { useForm } from 'react-hook-form'
import TableKit from '@/components/TableKit'

export default function FormKit() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = handleSubmit((data) => {
		console.log(data)
	})
	return (
		<section>
			<form className='my-3 px-2 py-1 bg-slate-700' onSubmit={onSubmit}>
				<div>
					<div className='flex gap-3 justify-around'>
						<div className='flex flex-col gap-y-2'>
							<label htmlFor='numKit'>Combo</label>
							<input
								type='number'
								name='numKit'
								id='numKit'
								min={0}
								max={32}
								step={1}
								placeholder={4}
								{...register('numKit', {
									required: true,
								})}
							/>
							{(errors.numKit || register.numKit <= 0) && (
								<span className='text-red-400 text-sm'>
									¿Cuantas Camaras necesitas?
								</span>
							)}
						</div>
						<div className='flex flex-col gap-y-2'>
							<label htmlFor='TradeMark'>TradeMark</label>
							<select id='TradeMark' {...register('TradeMark')}>
								<optgroup>
									<option value='hikvision'>HikVision</option>
									<option value='dahua'>Dahua</option>
									<option value='samsung'>Samsung</option>
									<option value='bkd'>BKD</option>
								</optgroup>
							</select>
						</div>
						<div className='flex flex-col gap-y-2'>
							<label htmlFor='Storage'>Almacenamiento</label>
							<select id='Storage' {...register('Storage')}>
								<optgroup>
									<option value='500GB'>500GB</option>
									<option value='1TB'>1TB</option>
									<option value='2TB'>2TB</option>
									<option value='4TB'>4TB</option>
								</optgroup>
							</select>
						</div>
						<div className='flex flex-col gap-y-2'>
							<label htmlFor='Power'>Fuente de Poder</label>
							<select id='Power' {...register('Power')}>
								<optgroup>
									<option value='unit'>Individual</option>
									<option value='central'>
										Centralizado
									</option>
								</optgroup>
							</select>
						</div>
						<div className='flex flex-col gap-y-2'>
							<label htmlFor='Wire'>Cableado</label>
							<select id='Wire' {...register('Wire')}>
								<optgroup>
									<option value='50'>50 mts</option>
									<option value='100'>100 mts</option>
									<option value='305'>305 mts</option>
								</optgroup>
							</select>
						</div>
					</div>
					<div>
						<button
							type='submit'
							className='w-full px-7 my-3 rounded-sm bg-sky-500'
						>
							CONFIRMAR
						</button>
					</div>
				</div>
			</form>
			{register.numKit === 'undefined' ?? (
				<TableKit QueryOpt={register.numKit} />
			)}
		</section>
	)
}
