// src/server/router/index.ts
import { t } from '~/server/trpc'
import { healthRouter } from './health'
import { userRouter } from './user'

export const appRouter = t.router({
	health: healthRouter,
	user: userRouter,
})

// .merge('net.', shieldRouter)
// .query('hello', {
// 	input: z
// 		.object({
// 			id: z.string().nullish(),
// 		})
// 		.nullish(),
// 	resolve({ input }) {
// 		return {
// 			greeting: `Hello ${input?.id ?? 'world'}`,
// 		}
// 	},
// })

// export const appRouter = shieldRouter

// export type definition of API
export type AppRouter = typeof appRouter
