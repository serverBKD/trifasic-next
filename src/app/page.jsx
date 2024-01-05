import CTAForm from '@/components/CTAForm.jsx'
import FeatureOne from '@/components/FeatureOne.jsx'
import Footer from '@/components/Footer.jsx'
import Hero from '@/components/Hero.jsx'
import _Hero from '@/components/_Hero.jsx'
import NavBar from '@/components/NavBar.jsx'
import NavBarCart from '@/components/NavBarCart.jsx'
import Pricing from '@/components/Pricing.jsx'
import Stat from '@/components/Stat.jsx'
import Contents from '@/components/Contents.jsx'
import BrandsCard from '@/components/BrandsCard.jsx'
import RedesSociales from '@/components/RedesSociales.jsx'

export default function Home() {
	return (
		<main className="relative">
			<RedesSociales/>
			<NavBar />
			<_Hero/>
			<Hero />
			<NavBarCart />
			<FeatureOne />
			<BrandsCard />
			<Contents />
			<Pricing />
			<Stat />
			<CTAForm />
			<Footer />
		</main>
	)
}
