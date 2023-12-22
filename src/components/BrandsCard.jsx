import Image from 'next/image'

export default function BrandsCard() {
	return (
		<section className='w-full min-w-[480px]'>
			<div className='w-[60%] h-auto mx-auto py-3 grid grid-flow-row-dense grid-rows-auto grid-cols-7 gap-x-2 gap-y-3'>
				<div className='bg-slate-100 hover:shadow-lg hover:shadow-slate-700'>
					<Image
						src={
							'/trifasic_IMG/bateria_D_NQ_NP_697443-MLV69638180151_052023-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50 before:bg-sky-200 hover:opacity-60 '
					/>
				</div>
				<div className='bg-slate-500'>
					<Image
						src={
							'/trifasic_IMG/alambre_cerco_D_NQ_NP_906762-MLV40037403596_122019-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-600'>
					<Image
						src={
							'/trifasic_IMG/F1A_D_NQ_NP_983410-MLV41915341353_052020-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-800'>
					<Image
						src={
							'/trifasic_IMG/VBA_D_NQ_NP_615312-MLV54885266849_042023-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-700'>
					<Image
						src={
							'/trifasic_IMG/xdr_D_NQ_NP_828127-MLV51187422965_082022-O.webp'
						}
						width={550}
						height={550}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-900'>
					<Image
						src={
							'/trifasic_IMG/hilook-_IPC-B1x0HA-LU-筒机39-全彩双光-海康白-hilook-左侧.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-300'>
					<Image
						src={
							'/trifasic_IMG/VBC_D_NQ_NP_890691-MLV72079369929_102023-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-600'>
					<Image
						src={
							'/trifasic_IMG/IPCAM_PTZ_D_NQ_NP_985821-MLV70202187819_062023-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-300'>
					<Image
						src={
							'/trifasic_IMG/VB2BD_NQ_NP_894156-MLV70228888778_072023-O.webp'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-900'>
					<Image
						src={
							'/trifasic_IMG/DS-2CV2QX1-PT-01.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-600'>
					<Image
						src={
							'/trifasic_IMG/Hikvision-Storage-DSC_6253.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-300'>
					<Image
						src={
							'/trifasic_IMG/hikvisionIP_DS-2CD21X1G1-IDW12.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-900'>
					<Image
						src={
							'/trifasic_IMG/kit4ch-K-4142BH-MHP.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
				<div className='bg-slate-900'>
					<Image
						src={
							'/trifasic_IMG/hikviosnIP-24X5FWD-Cube-01.png.thumb.1280.1280.png'
						}
						width={1080}
						height={1080}
						alt='bat'
						className='min-h-full object-contain object-center bg-slate-50'
					/>
				</div>
			</div>
		</section>
	)
}
