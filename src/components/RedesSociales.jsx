export default function RedesSociales (){
	return(
		<section className="absolute w-auto h-[220px] top-1/2 left-2
          border-2 border-slate-500 ">
			<article className="w-full h-full flex flex-col justify-evenly items-center overflow-hidden" >
				<div className=" w-[80px] h-1/4 bg-instagram-color">
					<p className="text-slate-300">
                        Instagram
					</p>
				</div>
				<div className=" w-[80px] h-1/4 bg-facebook-color">Facebook</div>
				<div className=" w-[80px] h-1/4 bg-xcom-color">Xcom</div>
				<div className=" w-[80px] h-1/4 bg-whatsapp-color">WhatsApp</div>
			</article>
		</section>
	)
}