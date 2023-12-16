import Link from 'next/link'
import { WhatsAppUrl } from '../config/config.m.js'

export default function NavBar() {
	return (
		<section className='navbar bg-slate-900 max-h-7 md:px-14'>
			<div className='navbar-start '>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<Link href={'/store'}>Store</Link>
						</li>
						<li>
							<Link href={'/proforma'}>Combos CCTV</Link>
						</li>
						<li>
							<a>Seguridad Electrónica: CCTV</a>
						</li>
						<li>
							<Link href={'/erp'}>Sistemas de Facturación</Link>
							<ul className='p-2'>
								<li>
									<Link href={'/erp'}>Facturación</Link>
								</li>
								<li>
									<Link href={'/erp'}>Contabilidad</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<Link
					href={'/'}
					className='btn btn-ghost text-2xl bg-[#EFCA08] text-[#0086C2]'
				>
					server/[241]
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link href={'/store'}>Tienda</Link>
					</li>
					<li>
						<Link href={'/proforma'}>Combos CCTV</Link>
					</li>
					<li>
						<Link href={'/sec'}>Seguridad Electrónica</Link>
					</li>
					<li>
						<Link href={'/erp'}>Sistemas de Facturación</Link>
					</li>
					<li>
						<Link href={'/contacto'}>Contacto</Link>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<Link
					href={WhatsAppUrl}
					className='btn bg-[#EFCA08]  text-base-300 tracking-wider hover:bg-[#25D366] hover:text-base-200 hover:shadow-md hover:shadow-slate-500 '
				>
					WhatsApp
				</Link>
			</div>
		</section>
	)
}
