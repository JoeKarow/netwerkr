// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import * as z from 'zod'

import { appRouter as shieldRouter } from 'server/trpc-shield/routers'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('net.', shieldRouter)
	.query('hello', {
		input: z
			.object({
				id: z.string().nullish(),
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `Hello ${input?.id ?? 'world'}`,
			}
		},
	})

// export const appRouter = shieldRouter

// export type definition of API
export type AppRouter = typeof appRouter
