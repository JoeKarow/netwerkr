// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from 'server/router'
import { createContext as context } from 'server/router/context'

// export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext: context,
	onError({ error }) {
		if (error.code === 'INTERNAL_SERVER_ERROR') {
			// send to bug reporting
			console.error('Something went wrong', error)
		}
	},
	batching: {
		enabled: true,
	},
})
