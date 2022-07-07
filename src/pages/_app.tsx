// src/pages/_app.tsx
import { withTRPC } from '@trpc/next'
import type { AppRouter } from '../server/router'
import superjson from 'superjson'

import { SessionProvider } from 'next-auth/react'

import Head from 'next/head'
import { useState } from 'react'
import { getCookie, setCookies } from 'cookies-next'
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { globalTheme } from 'styles/theme'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import type { ReactNode } from 'react'
import type { NextComponentType } from 'next'
import type { Session } from 'next-auth'

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'

type AppLayoutPropsWithColorScheme = AppLayoutProps & {
	colorScheme: ColorScheme
	session: Session
}

const queryClient = new QueryClient()

const MyApp: NextComponentType<
	AppContext,
	AppInitialProps,
	AppLayoutPropsWithColorScheme
> = props => {
	const { Component, pageProps } = props
	const { session } = pageProps
	const getLayout = Component.getLayout || ((page: ReactNode) => page)
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
						theme={globalTheme}
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
	/* It's a way to get the base url for the app. */
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
