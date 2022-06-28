import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
// import { NodeHTTPCreateContextFnOptions } from '@trpc/server/adapters/node-http';
// import { IncomingMessage } from 'http';
import { unstable_getServerSession  } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getSession } from 'next-auth/react';


const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
});
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const req = opts?.req;
  const res = opts?.res;
  // console.log('opts', opts)
  const session = getSession()
  // const session = await unstable_getServerSession(req, res, authOptions)
  console.log('context session', session)
  console.log('createContext for', session?.user?.name ?? 'unknown user');
  return {
    req,
    res,
    prisma,
    session,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
