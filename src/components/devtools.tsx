import { Container, Text } from '@mantine/core'
import { useSession } from 'next-auth/react'

/**
 * It takes in a data object and returns a styled text element with the data object stringified
 * @param {any} data - any - this is the data that will be displayed in the JSON view.
 * @returns A React component
 */
export const JsonView = (data: any) => {
	return (
		<Container fluid>
			<Text sx={{ whiteSpace: 'pre-wrap' }}>
				{JSON.stringify(data, null, 2)}
			</Text>
		</Container>
	)
}

/* A React component that is checking the status of the user's session. */
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
