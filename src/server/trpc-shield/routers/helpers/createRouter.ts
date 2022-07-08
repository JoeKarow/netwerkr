import * as trpc from '@trpc/server'
import { permissions } from 'server/shield'
import superjson from 'superjson'

// make sure to change this according to your Context path
import { Context } from 'server/router/context'

export function createRouter() {
	return trpc.router<Context>().transformer(superjson)
}

export function createProtectedRouter() {
	return trpc
		.router<Context>()
		.transformer(superjson)
		.middleware(({ ctx, next }) => {
			console.log('inside middleware!')
			return next()
		})
		.middleware(permissions)
}
