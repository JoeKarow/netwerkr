import { GetServerSidePropsContext } from 'next'
import superjson from 'superjson'

import { createContext } from 'server/router/context'
import { createSSGHelpers } from '@trpc/react/ssg'

import { appRouter } from 'server/router/'

/**
 * Initialize server-side rendering tRPC helpers.
 * Provides a method to prefetch tRPC-queries in a `getServerSideProps`-function.
 * Make sure to `return { props: { trpcState: ssr.dehydrate() } }` at the end.
 */
export async function ssrInit(context: GetServerSidePropsContext) {
	const ctx = await createContext(context)

	const ssr = createSSGHelpers({
		router: appRouter,
		transformer: superjson,
		ctx,
	})

	// always preload "viewer.i18n"

	return ssr
}
