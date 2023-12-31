/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
			},
			colors: {
				'primary-color': 'var(--primary-color  )',
				'secondary-color': 'var(--secondary-color )',
				'whatsapp-color': 'var(--whatsapp-color)',
				'xcom-color': 'var(--xcom-color)',
				'instagram-color': 'var(--instagram-color)',
				'facebook-color': 'var(--facebook-color)',
			}
		},
	},
	plugins: [require('daisyui')],
}
