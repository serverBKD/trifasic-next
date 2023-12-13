import CardsOne from './CardsOne'

export default function TriPack() {
	return (
		<section className='w-full bg-slate-900 flex flex-wrap items-center justify-evenly'>
			<CardsOne/>
			<CardsOne/>
			<CardsOne/>
		</section>
	)
}
