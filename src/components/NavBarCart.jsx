'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function NavBarCart() {
	return (
		<section className='w-full h-auto mx-auto bg-slate-900'>
			<section className='navbar px-4 md:px-32'>
				<div className='flex-1'>
					<Link
						href='/'
						className='btn btn-ghost text-2xl font-extrabold bg-[#EFCA08] text-[#0086C2] hover:text-[#EFCA08] hover:bg-[#0086C2]'
					>
						nodo3{/* server/[241] */}
					</Link>
				</div>
				<div>
					<Link
						href={'/api/auth/signin'}
						className='btn mx-1 px-3 bg-[#EFCA0A] text-[#0086C2] hover:text-[#EFCA0A] hover:bg-[#0086C3]'
					>
						SignIn
					</Link>
				</div>
				<div className='flex-none'>
					<div className='dropdown dropdown-end flex items-center gap-3'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-circle bg-[#EFCA0ADA] hover:text-[#EFCA08] hover:bg-[#0086C2] hover:text-[#EFCA0ADA]'
						>
							<div className='indicator'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6z w-6z'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
									/>
								</svg>
								<span className='badge badge-sm indicator-item'>
									8
								</span>
							</div>
						</div>
						<div
							tabIndex={0}
							className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
						>
							<div className='card-body'>
								<span className='font-bold text-lg'>
									13 Items
								</span>
								<span className='text-info'>
									Subtotal: $1499
								</span>
								<div className='card-actions'>
									<button className='btn btn-primary btn-block'>
										View cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='dropdown dropdown-end'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle avatar'
						>
							<div className='w-10 rounded-full'>
								<Image
									src='/8d0be19a-99a5-478d-8a54-5b95d2f1fb67.jpeg'
									alt='Tailwind CSS Navbar component'
									width={100}
									height={100}
									className='w-6 h-6 rounded-full outline-7 outline-[#EFCA0A]'
								/>
							</div>
						</div>
						<ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32'>
							<li>
								<Link
									href={'/api/auth/signin'}
									className='justify-between'
								>
									Profile
									<span className='badge'>New</span>
								</Link>
							</li>
							<li>
								<Link href={'/setting'}>Settings</Link>
							</li>
							<li>
								<button
									onClick={() => alert('/logon: Hasta luego')}
								>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</section>
	)
}
