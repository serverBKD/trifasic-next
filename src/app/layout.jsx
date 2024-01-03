/* eslint-disable react/prop-types */
import { oswald } from '@/fonts/fonts.js'
import './globals.css'
// eslint-disable-next-line no-unused-vars
import loading from '@/app/loading.jsx'
// eslint-disable-next-line no-unused-vars
import notfound from '@/app/not-found.jsx'

export const metadata = {
	title: 'trifasicxtore',
	description: 'Store & Services',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${oswald.className} w-full min-w-[480px] min-h-screen bg-slate-100 text-white`}
			>
				{children}
			</body>
		</html>
	)
}
