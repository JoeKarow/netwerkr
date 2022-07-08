import React, { ReactNode } from 'react'
// import { getContact } from '@joekarow/netwerkr-lib/db'
import { DashLayout } from '~/layout'
import { ProfileGrid } from '~/section'
import { JsonView } from '~/components/devtools'
import { trpc } from '~/utils/trpc'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { createSSGHelpers } from '@trpc/react/ssg'
import { appRouter } from '~/server/router'
import { createContext } from '~/server/router/context'
import superjson from 'superjson'

export const getServerSideProps = async (
	context: GetServerSidePropsContext<{ uid: string }>
) => {
	try {
		const ctx = await createContext()
		const ssg = await createSSGHelpers({
			router: appRouter,
			ctx, //await createContext({ req, res }),
			transformer: superjson,
		})

		const id = context.params?.uid as string
		await ssg.fetchQuery('net.user.findFirstUser', {
			where: { id },
		})

		return {
			props: {
				trpcState: ssg.dehydrate(),
				id,
			},
		}
	} catch (error) {
		console.error(error)
	}
}

export default function Profile(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const { id } = props
	const contactQuery = trpc.useQuery([
		'net.user.findFirstUser',
		{ where: { id } },
	])

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
