// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { exampleRouter } from './example'
import { authRouter } from './auth'

import { appRouter as shieldRouter } from '@db/trpc-shield/routers'

// export const appRouter = createRouter()
// 	.transformer(superjson)
// 	.merge('example.', exampleRouter)
// 	.merge('auth.', authRouter)

export const appRouter = shieldRouter

// export type definition of API
export type AppRouter = typeof appRouter
