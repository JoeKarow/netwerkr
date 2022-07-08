import type {
	NextComponentType,
	NextPageContext,
	NextLayoutComponentType,
	NextPage,
} from 'next'
import type { AppProps } from 'next/app'
// import { PropsWithChildren } from 'react'
// import { DefaultSession } from 'next-auth'

declare module '*.jpg'

declare module 'next' {
	// eslint-disable-next-line @typescript-eslint/ban-types
	type NextLayoutComponentType<P = {}> = NextComponentType<
		NextPageContext,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		any,
		P
	> & {
		getLayout?: (page: ReactNode) => ReactNode
	}
	export type NextPageWithLayout = NextPage & {
		getLayout?: (page: ReactNode) => ReactNode
	}
}

declare module 'next/app' {
	// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
	type AppLayoutProps<P = {}> = AppProps & {
		Component: NextLayoutComponentType
	}
}
