import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@joekarow/netwerkr-ui/mantine/core';

export default function App ( props ) {
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout || ( ( page ) => page )

    return getLayout(
        <>
            <Head>
                <title>netwerkr</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={ {
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                } }
            >
                <Component { ...pageProps } />
            </MantineProvider>
        </>
    );
}