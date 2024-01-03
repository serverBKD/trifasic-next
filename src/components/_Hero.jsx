import Image from 'next/image'

export default function _Hero() {
	return (
		<section className='w-full max-h-screen  bg-slate-200 grid md:block place-items-center overflow-hidden'>
			<section className='w-[70%] lg:w-full max-w-[1240px]  my-[40px] mx-auto bg-slate-600 flex items-center lg:items-start justify-center gap-4 '>
				<article className='w-2/3 min-w-[760px] max-h-[960px]  bg-sky-600 shadow-xl hidden xl:block '>
					<Image
						src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
						alt='hero1'
						width={1080}
						height={1080}
						className='w-full h-[780px] object-cover'
					/>
				</article>
				{/**	Working 02/01/24 */}
				<article className="w-full  min-w-lg md:h-full h-auto mx-auto md:min-w-1/3 p-4 md:p-2 grid grid-cols-2 md:grid-cols-2 md:min-h-max lg:grid-cols-3 xl:grid-cols-2 xl:grid-rows-3 gap-2 bg-red-500 overflow-hidden">
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className='object-contain'
						/>
					</div>
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px]  "> 
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px]  "> 
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px] ">
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
					<div className="min-w-[180px] "> 
						<Image
							src={'/productsSec/paradox/EVO192_Front_4k.jpg'}
							alt='hero1'
							width={1080}
							height={1080}
							className=' object-cover'
						/>
					</div>
				</article>
			</section>
		</section>
	)
}
