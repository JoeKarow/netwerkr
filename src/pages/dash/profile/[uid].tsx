import React, { ReactNode } from 'react'
// import { getContact } from '@joekarow/netwerkr-lib/db'
import { DashLayout } from '~/layout'
import { ProfileGrid } from '~/section'
import { JsonView } from '~/components/devtools'
import { trpc } from '~/utils/trpc'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { createSSGHelpers } from '@trpc/react/ssg'
import { appRouter, createContext } from '~/pages/api/trpc/[trpc]'

import superjson from 'superjson'

export const getServerSideProps = async (
	context: GetServerSidePropsContext<{ uid: string }>
) => {
	try {
		// const ctx = await createContext(context)
		const ssg = await createSSGHelpers({
			router: appRouter,
			ctx: await createContext(),
			transformer: superjson,
		})

		const id = context.params?.uid as string
		await ssg.fetchQuery('user.getById', { id })

		return {
			props: {
				trpcState: ssg.dehydrate(),
				id,
			},
			// revalidate: 1,
		}
	} catch (error) {
		console.error(error)
	}
}

export default function Profile(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const { id } = props
	const contactQuery = trpc.proxy.user.getById.useQuery({ id })

	const { data } = contactQuery
	// console.log( data )
	return (
		<>
			<ProfileGrid />
			<JsonView data={data} />
		</>
	)
}
Profile.getLayout = (page: ReactNode) => {
	return <DashLayout>{page}</DashLayout>
}

//http://localhost:3000/dash/profile/62ba7634dc0748278a9ce027
