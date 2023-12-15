import Image from 'next/image'

export default function Hero() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font w-full min-h-screen bg-fixed bg-cover bg-no-repeat bg-center bg-opacity-10 bg-gradient-to-r from-slate-900 to-slate-500">
			<div className=" min-w-full min-h-screen flex px-24 lg:px-0 flex-col lg:flex-row items-center justify-center overflow-hidden">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
					<Image
						src={'/productsSec/paradox/EVO192_Front_4k-removebg-preview.png'}
						alt="hero"
						width={400}
						height={400}
						className="w-full max-h-[520px] object-cover object-center rounded"
					/>
				</div>
				<div className="max-w-[740px] lg:flex-grow md:w-1/2 lg:pl-24 md:pl-18 py-3 flex flex-col md:items-start md:text-left items-center text-center overflow-hidden">
					<h1 className="title-font text-7xl md:text-4xl mb-4 font-medium text-white">¡Técnicos con <span className="bg-white text-slate-700 font-bold px-2 m-2 rounded-md underline">Experiencia</span>
						<br className="hidden lg:inline-block"/>en Solucionar!
					</h1>
					<h2 className="text-2xl">server/[241]</h2>
					<p className="mb-8 leading-relaxed overflow-hidden">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
					<div className="flex justify-center">
						<button className="w-32 inline-flex text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Más Info</button>

					</div>
				</div>
			</div>
		</section>
	)
}
