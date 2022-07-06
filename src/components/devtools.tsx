import { Container, Text } from '@mantine/core'
import { useSession } from 'next-auth/react'

export const JsonView = (data: any) => {
	return (
		<Container fluid>
			<Text sx={{ whiteSpace: 'pre-wrap' }}>
				{JSON.stringify(data, null, 2)}
			</Text>
		</Container>
	)
}

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
