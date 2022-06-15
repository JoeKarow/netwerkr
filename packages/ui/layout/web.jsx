import React from 'react'
import { HeaderAction } from '../section'
import { links } from './navLinks'
import { AppShell, Container } from '@mantine/core'

const fetcher = ( url ) => fetch( url ).then( ( res ) => res.json() )
export const Layout = ( { children } ) => {


    return (
        <AppShell
            header={ <HeaderAction links={ links } /> }
        >
            <Container size='xl'>
                { children }
            </Container>

        </AppShell>
    )
}
