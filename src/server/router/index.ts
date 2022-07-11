// src/server/router/index.ts
import { t } from '~/server/trpc'
import { contactRouter } from './contact'
import { healthRouter } from './health'
import { interactionsRouter } from './interaction'
import { userRouter } from './user'

export const appRouter = t.router({
	health: healthRouter,
	user: userRouter,
	contact: contactRouter,
	interactions: interactionsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
