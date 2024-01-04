import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET
		})
	],
	theme: {
		colorScheme: 'dark',
	},
	callbacks: {
		async session({ session, user }) {
			// Store the user's profile in the session
			session.user = user
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}