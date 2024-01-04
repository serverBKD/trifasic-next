import Image from 'next/image'
import ProductSec from '@/lib/ProductSeg.d'

export default function TableKit({ _data }) {
	const { numKit, TradeMark, Storage, Power, Wire } = _data
	console.log('Table:', numKit, TradeMark, Storage, Power, Wire)
	const CAM = new ProductSec(
		'DS-2CE16C0T-IRPF',
		'BKD-2CE16C0T-IRPF',
		'Hikvision',
		'BULLET 4 EN 1',
		'BULLET 4 EN 1 720P 2,8MM IP66 PLASTICA',
		11.25,
		10,
		'CCTV',
		'/productsSec/DSC/PC9155-removebg-preview.png'
	)
	return (
		<table className='w-full my-3 px-3'>
			<thead className='border border-slate-700'>
				<tr className='grid grid-flow-col gap-1 grid-cols-7 bg-slate-900 px-3 items-center'>
					<td>Modelo</td>
					<td>Marca</td>
					<td className='col-span-2'>Description</td>
					<td>Cant</td>
					<td>Precio Unit</td>
					<td>Total Unit</td>
					<td>Nota</td>
					<td>Imagen</td>
				</tr>
			</thead>
			<tbody>
				{/* <!-- DVR --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700 px-3 items-center'>
					<td>HKI-7208-HQHI</td>
					<td>{TradeMark.toLocaleUpperCase()}</td>
					<td className='col-span-2'>XVR 8CH 2MP</td>
					<td>1</td>
					<td>$76</td>
					<td>$76</td>
					<td>{Storage}</td>
					<td>
						<Image
							src={'/productsSec/DSC/PC9155-removebg-preview.png'}
							alt=''
							width={60}
							height={60}
						/>
					</td>
				</tr>
				{/* <!-- CAMARAS --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600 px-3 items-center'>
					<td>{CAM.model}</td>
					<td>{TradeMark.toLocaleUpperCase()}</td>
					<td className='overflow-hidden col-span-2'>
						{CAM.description}
					</td>
					<td>{numKit}</td>
					<td>{CAM.price_sell}</td>
					<td>{numKit * +CAM.price_sell}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- DISCO DURO --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700 px-3 items-center'>
					<td>HD-SG-500GB</td>
					<td>SEAGATE {Storage}</td>
					<td className='overflow-hidden col-span-2'>
						Disco Duro Mecánico 3.5
					</td>
					<td>1</td>
					<td>45</td>
					<td>45</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- FUENTES DE PODER --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600 px-3 items-center'>
					<td>BKD-FP-1A</td>
					<td>STARFUSE</td>
					<td className='overflow-hidden col-span-2'>
						Fuente de Poder 12V 1Amp
					</td>
					<td>{numKit}</td>
					<td>2.5</td>
					<td>{numKit * 2.5}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- VIDEO BALUNES --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700 px-3 items-center'>
					<td>BKD-VB-15</td>
					<td>BKDVision</td>
					<td className='overflow-hidden col-span-2'>
						Video Balum c/Tornillo
					</td>
					<td>{numKit}</td>
					<td>1.5</td>
					<td>{numKit * 1.5}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- CABLEADO --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600 px-3 items-center '>
					<td>WP+50: {Wire}</td>
					<td>WIREPLUS</td>
					<td className='overflow-hidden col-span-2'>
						Cable UTP Nivel 5e Cu70/30 Interno
					</td>
					<td>{+Wire}</td>
					<td>.75</td>
					<td>{+Wire * 0.35}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- ACCESORIOS --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700 px-3 items-center'>
					<td>Accesorios</td>
					<td>BKDSuplly</td>
					<td className='overflow-hidden col-span-2'>
						Accesorios Varios como Tornillos y Teipe
					</td>
					<td>{numKit}</td>
					<td>.015</td>
					<td>{+numKit * 0.715}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- Mano de Obra --> */}
				<tr className='grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600  px-3 items-center'>
					<td>BKD_WORK</td>
					<td>BKD_WORK</td>
					<td className='overflow-hidden col-span-2'>
						Punto de Instalacion CCTV
					</td>
					<td>{+numKit}</td>
					<td>20</td>
					<td>{+numKit * 20}</td>
					<td>{CAM.tags}</td>
					<td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td>
				</tr>
				{/* <!-- TOTAL--> */}
				<tr className='h-12 grid grid-flow-col gap-1 grid-cols-7 text-md text-primary-color  text-center bg-slate-800 px-3 items-center'>
					<td>BKD_WORK</td>
					<td>Total</td>
					<td className='overflow-hidden col-span-2'>
						{`Total CCTV ${numKit} Cámaras`.toLocaleUpperCase()}
					</td>
					<td>{+numKit}</td>
					<td>20$</td>
					<td>{+numKit * 20}$</td>
					<td>+</td>
					{/* <td>
						<Image src={CAM.images} alt='' width={60} height={60} />
					</td> */}
				</tr>
			</tbody>
		</table>
	)
}
