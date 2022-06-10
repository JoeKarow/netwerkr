import { NextUIProvider } from '@joekarow/ui/nextui'

const MyApp = ( { Component, pageProps } ) => {
  return (
    <NextUIProvider>
      <Component { ...pageProps } />
    </NextUIProvider>
  )
}

export default MyApp