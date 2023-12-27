import Login from '@/app/Components/Login.jsx'
import Test from '@/app/Components/Test.jsx'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<userContext>
				<Login />
				<Test/>
			</userContext>
		</main>
	)
}
