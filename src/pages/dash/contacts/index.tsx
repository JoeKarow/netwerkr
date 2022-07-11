import React, { ReactNode } from 'react'
import { DashLayout } from '~/layout'
import { ContactsTable } from '~/section/ContactsTable'
import { JsonView } from '~/components/devtools'
import { trpc } from '~/utils/trpc'
// import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
// import { createSSGHelpers } from '@trpc/react/ssg'
// import { appRouter, createContext } from '~/pages/api/trpc/[trpc]'
import { useSession } from 'next-auth/react'

// import superjson from 'superjson'

// export const getServerSideProps = async (
// 	// context: GetServerSidePropsContext
// ) => {
// 	try {
// 		const context = await createContext()

// 		const ssg = await createSSGHelpers({
// 			router: appRouter,
// 			ctx: await createContext(),
// 			transformer: superjson,
// 		})

// 		const id = context.session
// 		await ssg.fetchQuery('contact.getAllContacts', { id })

// 		return {
// 			props: {
// 				trpcState: ssg.dehydrate(),
// 				id,
// 			},
// 			// revalidate: 1,
// 		}
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

export default function ContactsMain() {
	// props: InferGetServerSidePropsType<typeof getServerSideProps>
	const { data: session } = useSession()
	const id = session?.user.id || ''
	const contactQuery = trpc.proxy.contact.getAllContacts.useQuery({ id })

	const { data, isLoading } = contactQuery
	return (
		<>
			{isLoading ? <p>Loading...</p> : <ContactsTable data={data} />}
			<JsonView data={data} />
		</>
	)
}
ContactsMain.getLayout = (page: ReactNode) => {
	return <DashLayout>{page}</DashLayout>
}

//http://localhost:3000/dash/profile/62ba7634dc0748278a9ce027
