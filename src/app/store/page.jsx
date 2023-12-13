import NavBarCart from '@/components/NavBarCart.jsx'
import StoreGrid from '@/components/StoreGrid.jsx'
import StoreTwo from '@/components/StoreTwo.jsx'
export default function page() {
	return (
		<section>
			<NavBarCart/>
			<section className="w-full min-h-screen bg-slate-900">
				<StoreTwo />
				<StoreGrid/>
			</section>
		</section>
	)
}
