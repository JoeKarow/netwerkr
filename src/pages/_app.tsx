// src/pages/_app.tsx
import { withTRPC } from '@trpc/next'
import type { AppRouter } from '../server/router'
import type { AppType } from 'next/dist/shared/lib/utils'
import superjson from 'superjson'

import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

import Head from 'next/head'
import { useState } from 'react'
import { getCookie, setCookies } from 'cookies-next'
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage, GetServerSidePropsContext } from 'next'
import type { AppProps } from 'next/app'

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const queryClient = new QueryClient()

const MyApp = (props: AppPropsWithLayout & { colorScheme: ColorScheme }) => {
	const { Component, pageProps } = props
	const { session } = pageProps
	const getLayout = Component.getLayout || (page => page)
	const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)
	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
		setColorScheme(nextColorScheme)
		setCookies('mantine-color-scheme', nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		})
	}
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<Head>
					<title>netwerkr</title>
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width'
					/>
				</Head>
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						withGlobalStyles
						withNormalizeCSS
						theme={{
							/** Put your mantine theme override here */
							colorScheme: 'light',
						}}
					>
						<NotificationsProvider>
							{getLayout(<Component {...pageProps} />)}
						</NotificationsProvider>
					</MantineProvider>
				</ColorSchemeProvider>
			</SessionProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return ''
	}
	if (process.browser) return '' // Browser should use current path
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

	return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = `${getBaseUrl()}/api/trpc`

		return {
			url,
			transformer: superjson,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		}
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: false,
})(MyApp)
