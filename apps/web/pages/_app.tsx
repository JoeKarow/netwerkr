import Head from 'next/head';
import { MantineProvider } from '@joekarow/netwerkr-ui/mantine/core'
import { SessionProvider, getSession } from 'next-auth/react'
import type { Context, ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import getConfig from 'next/config';
import { AppType } from 'next/dist/shared/lib/utils';
import type { AppRouter } from 'server/routers/_app';
import superjson from 'superjson';
import { SSRContext } from 'utils/trpc';


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App =  ( { Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout ) => {
    // console.log( 'app props', pageProps )
    // console.log( 'session', session )
    // const { session, ...pageProps } = props
    const getLayout = Component.getLayout || ( ( page ) => page )
    return (
            <SessionProvider session={ session }>
                <Head>
                    <title>netwerkr</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={ {
                        /** Put your mantine theme override here */
                        colorScheme: 'light'
                    } }
                >
                    { getLayout( <Component { ...pageProps } /> ) }
                </MantineProvider>
            </SessionProvider>

    );
}

const { publicRuntimeConfig } = getConfig();

const { APP_URL } = publicRuntimeConfig;

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }


  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}


export default withTRPC<AppRouter>({
  config({ctx}) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta(opts) {
    const ctx = opts.ctx as SSRContext;

    if (ctx.status) {
      // If HTTP status set, propagate that
      return {
        status: ctx.status,
      };
    }

    const error = opts.clientErrors[0];
    if (error) {
      // Propagate http first error from API calls
      return {
        status: error.data?.httpStatus ?? 500,
      };
    }
    // For app caching with SSR see https://trpc.io/docs/caching
    return {};
  },
})(App);