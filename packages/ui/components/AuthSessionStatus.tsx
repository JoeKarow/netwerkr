import React from 'react'
import { useSession } from 'next-auth/react'

export const AuthSessionStatus = () => {
	const { data: session, status } = useSession()

	if (status === 'loading') {
		return <p>Loading Auth Status...</p>
	}
	if (status === 'unauthenticated') {
		return <p>Not logged in.</p>
	}

	return <p>Logged in!</p>
}
