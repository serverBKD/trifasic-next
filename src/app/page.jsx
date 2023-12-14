import CTAForm from '@/components/CTAForm.jsx'
import FeatureOne from '@/components/FeatureOne.jsx'
import Footer from '@/components/Footer.jsx'
import Hero from '@/components/Hero.jsx'
import NavBar from '@/components/NavBar.jsx'
import NavBarCart from '@/components/NavBarCart.jsx'
import Pricing from '@/components/Pricing.jsx'
import Stat from '@/components/Stat.jsx'
import TriPack from '@/components/TriPack.jsx'
import Contents from '@/components/Contents.jsx'


export default function Home() {
	return (
		<main className="w-full min-h-screen bg-slate-900">
			<NavBarCart/>
			<Hero />
			<NavBar />
			<FeatureOne />
			<Contents/>
			<Pricing/>
			<TriPack/>
			<CTAForm />
			<Stat/>
			<Footer/>
		</main>
	)
}
	