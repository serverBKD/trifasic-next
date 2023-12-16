export default function loading() {
	return (
		<section className='w-full h-screen flex justify-center items-center  bg-base-100'>
			<span className='loading loading-infinity loading-lg text-secondary text-7xl'></span>
			<span class='relative flex h-7 w-7'>
				<span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-45'></span>
				<span class='relative inline-flex rounded-full h-7 w-7 bg-sky-500'></span>
			</span>
		</section>
	)
}
