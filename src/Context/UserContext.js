'use client'
import { createContext, useState } from 'react'

export const ProfileContext = createContext()

export const userContext = ({ children }) => {
	const [ UserProfile, setUserProfile ] = useState({
		email: '',
		password: '',
	})

	return (
		<ProfileContext.Provider 
			value= {{ UserProfile, setUserProfile }}
		>
			{children}
		</ProfileContext.Provider>
    
	)
}
