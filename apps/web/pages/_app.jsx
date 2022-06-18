import Head from 'next/head';
import { MantineProvider } from '@joekarow/netwerkr-ui/mantine/core';
import { SessionProvider } from 'next-auth/react'

const LayoutProvider = ( { Component, pageProps: { ...pageProps } } ) => {
    const getLayout = Component.getLayout || ( ( page ) => page )

    return getLayout( (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={ {
                /** Put your mantine theme override here */
                colorScheme: 'light'
            } }
        >
            <Component { ...pageProps } />
        </MantineProvider>

    )
    )
}


export default function App ( { Component, pageProps: { session, ...pageProps } } ) {
    // console.log( 'app props', pageProps )
    // console.log( 'session', session )
    // const { session, ...pageProps } = props
    const getLayout = Component.getLayout || ( ( page ) => page )
    return (
        <>
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

        </>
    );
}
