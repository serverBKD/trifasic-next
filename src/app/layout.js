import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'trifasic-sx241',
	description: 'Aside Project Template _ Laboratorio Alpha',
}

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={`${inter.className} w-full min-h-screen bg-slate-950`}>{children}</body>
		</html>
	)
}
