import FormKit from '@/components/FormKit'
import NavBar from '@/components/NavBar'
import Pricing from '@/components/Pricing'
export default function page() {
	return (
		<section className='w-full min-h-screen bg-slate-800 flex flex-col justify-center items-center'>
			<NavBar />
			<Pricing />
			<article className='px-2 py-5 my-3 text-center rounded-lg bg-slate-500'>
				<h1>Cotiza tus Combos de Seguridad</h1>
				<FormKit />
				<p>Kit Cámaras</p>
			</article>
		</section>
	)
}
