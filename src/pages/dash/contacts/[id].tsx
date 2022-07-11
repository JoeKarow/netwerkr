import React, { ReactNode } from 'react'
import { DashLayout } from '~/layout'
import { ProfileGrid } from '~/section'
import { JsonView } from '~/components/devtools'
import { trpc } from '~/utils/trpc'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Contact() {
	const router = useRouter()
	const id = router.query.id as string
	const { data: session } = useSession()
	const associatedUserId = session?.user.id || ''

	const contactQuery = trpc.proxy.contact.getContact.useQuery({
		id,
		associatedUserId,
	})

	const { data } = contactQuery
	// console.log( data )
	return (
		<>
			<ProfileGrid />
			<JsonView data={data} />
		</>
	)
}
Contact.getLayout = (page: ReactNode) => {
	return <DashLayout>{page}</DashLayout>
}

//http://localhost:3000/dash/profile/62ba7634dc0748278a9ce027
