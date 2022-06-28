import { Context } from './context';
import * as trpc from '@trpc/server';

/**
 * Helper function to create a router with context
 */
export function createRouter() {
  return trpc.router<Context>();
}
export function createProtectedRouter() {
  return createRouter().middleware(({ ctx, next }) => {
    // console.log('protected router context:')
    // console.dir(ctx)

    if (!ctx.session) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        // infers that `user` and `session` are non-nullable to downstream procedures
        session: ctx.session,
        user: ctx.session.user,
      },
    });
  });
}
