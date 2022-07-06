import type {
	NextComponentType,
	NextPageContext,
	NextLayoutComponentType,
	NextPage,
} from 'next'
import type { AppProps } from 'next/app'
import { PropsWithChildren } from 'react'
import { DefaultSession } from 'next-auth'

declare module 'next' {
	type NextLayoutComponentType<P = {}> = NextComponentType<
		NextPageContext,
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
	type AppLayoutProps<P = {}> = AppProps & {
		Component: NextLayoutComponentType
	}
}
