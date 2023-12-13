import Image from 'next/image'

export default function Hero() {
	return (
		// <section className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/0c7d159c-ef21-4c79-b39c-bf6be2186e12.jpeg')]">
		// 	<div className="hero-content flex-col-reverse min-w-full h-screen bg-slate-900 opacity-70 relative">
		// 		<div className="absolute w-32 h-32">
		// 			<h1 className="text-4xl font-bold text-white">¡Técnicos con <strong className='bg-slate-100 px-2 rounded-md text-slate-700'>Experiencia</strong> en Solucionar!</h1>
		// 			<p className="py-6 text-2xl font-bold text-white">Se acabaron tus problemas con la tecnología</p>
		// 			<button className="btn btn-primary text-xl font-bold text-white">Mas info</button>
		// 		</div>
		// 		<div>
		// 			<Image
		// 				src={'/0c7d159c-ef21-4c79-b39c-bf6be2186e12.jpeg'}
		// 				alt='Hero'
		// 				width={400}
		// 				height={400}
		// 			/>
		// 		</div>
		// 	</div>
		// </section>
		<section className="text-gray-400 bg-gray-900 body-font w-full min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/heroServer241.jpg')] before:bg-slate-900 before:opacity-10">
			<div className=" min-w-full min-h-screen  absolute opacity-100 flex px-24 md:flex-row flex-col items-center bg-slate-950">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
					<Image
						src={'/productsSec/paradox/EVO192_Front_4k-removebg-preview.png'}
						alt="hero"
						width={400}
						height={400}
						className="w-full max-h-[520px] object-cover object-center rounded"
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">¡Técnicos con Experiencia
						<br className="hidden lg:inline-block"/>en Solucionar!
					</h1>
					<p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
					<div className="flex justify-center">
						<button className="w-32 inline-flex text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Más Info</button>

					</div>
				</div>
			</div>
		</section>
	)
}
