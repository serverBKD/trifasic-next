import Link from 'next/link'
import { ubuntu_condensed } from '@/fonts/fonts.js'

export default function page404 () {
	return (
		<section className={`${ubuntu_condensed.classNameName} w-full h-screen p-0 flex flex-col items-center justify-center bg-base-100`}>
			<h1 className='text-8xl mx-7'>server/[241]</h1>
			<h3>error: 404</h3>
			<Link href={'/'} className="italic underline">ir a Inicio</Link>
		</section>
	)
}
