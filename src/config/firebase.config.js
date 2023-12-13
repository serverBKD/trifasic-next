import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyB_8EO1uwZdBOwUVSDCTTPC1PtuF4ip3V0',
	authDomain: 'spartan-xtore.firebaseapp.com',
	projectId: 'spartan-xtore',
	storageBucket: 'spartan-xtore.appspot.com',
	messagingSenderId: '312239597724',
	appId: '1:312239597724:web:3c20fa60b9ffc347cf6559',
	measurementId: 'G-XP06MT5F08'
}
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)