import { useContext } from 'react'
import { ProfileContext } from '../../Context/UserContext'

export default function Profile() {
	const { UserProfile } = useContext(ProfileContext)
	return (
		<div>
			<h1>Profile</h1>
			<p>{UserProfile.password}</p>
		</div>
	)
}
