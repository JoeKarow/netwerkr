// src/pages/_app.tsx
// import { withTRPC } from '@trpc/next'
// import { loggerLink } from '@trpc/client/links/loggerLink'
// import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
// import type { AppRouter } from '~/server/router'
// import superjson from 'superjson'

import { trpc } from '~/utils/trpc'

import { SessionProvider } from 'next-auth/react'

import Head from 'next/head'
import { useState } from 'react'
import { setCookies } from 'cookies-next'
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { globalTheme } from '~/styles/theme'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import type { ReactNode } from 'react'
import type { NextComponentType } from 'next'
import type { Session } from 'next-auth'

import { ReactQueryDevtools } from 'react-query/devtools'

type AppLayoutPropsWithColorScheme = AppLayoutProps & {
	colorScheme: ColorScheme
	session: Session
}

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
				<MantineProvider withGlobalStyles withNormalizeCSS theme={globalTheme}>
					<NotificationsProvider>
						{getLayout(<Component {...pageProps} />)}
						<ReactQueryDevtools initialIsOpen={false} />
					</NotificationsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</SessionProvider>
	)
}

export default trpc.withTRPC(MyApp)
