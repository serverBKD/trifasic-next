import Image from 'next/image'

// const img0 = '/4d2cddde-a1b5-4601-a187-ad270b503c59.jpeg'
const img1 = '/productsSec/paradox/PGM4_Front_UHD-removebg-preview.png'

export default function CardsOne() {
	return (
		<section className="card w-[420px] bg-base-300 shadow-xl my-2 mx-auto">
			<figure>
				<Image
					src={img1}
					alt="Shoes"
					width={180}
					height={180}
					className='w-full max-w-xl max-h-[240px] h-auto bg-white'
				/>
			</figure>
			<div className="card-body text-sm">
				<h2 className="card-title">
      Shoes!
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">tech</div>
				</div>
			</div>
		</section>
	)
}
