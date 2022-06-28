import { PrismaClient } from '@prisma/client';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession as getSessionNA, GetSessionParams } from 'next-auth/react';
import { Session, unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

const getSession = async (options): Promise<Session | null> => {
  const session = await getSessionNA(options)
  // const { req, res } = options
  // const session = await unstable_getServerSession(req, res, authOptions)
  return session as Session | null
}



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
  opts?: CreateNextContextOptions
) => {
  const req = opts?.req;
  const res = opts?.res;
  const session = await getSession({ req, res })
  // console.log('context session', session)
  console.log('createContext for', session?.user?.name ?? 'unknown user');
  return {
    req,
    res,
    prisma,
    session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
