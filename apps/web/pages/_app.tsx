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

App.getInitialProps = async ( ctx ) => {
    const session = await getSession(ctx)
  return {
    pageProps: {
      session,
    },
  };
};
function getEndingLink() {
  if (typeof window === 'undefined') {
    return httpBatchLink({
      url: `${APP_URL}/api/trpc`,
    });
  }
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
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
            (process.env.NODE_ENV === 'development' &&
              typeof window !== 'undefined') ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        getEndingLink(),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      headers: () => {
        if (ctx?.req) {
          // on ssr, forward client's headers to the server
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);
