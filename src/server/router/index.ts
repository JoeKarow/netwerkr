// src/server/router/index.ts
import { t } from '~/server/trpc'
import { healthRouter } from './health'
import { userRouter } from './user'

export const appRouter = t.router({
	health: healthRouter,
	user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
