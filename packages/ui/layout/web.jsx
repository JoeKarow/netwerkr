import React from 'react'
import { HeaderAction } from '../section'
import useSWR from 'swr'
import { AppShell, Container } from '@mantine/core'

const fetcher = ( url ) => fetch( url ).then( ( res ) => res.json() )
export const Layout = ( { children, nav } ) => {
    const { data, error } = useSWR( '/api/navigation', fetcher )
    if ( error ) {
        return <>Failed to load links</>
    }
    if ( !data ) return <>Loading...</>

    return (
        <AppShell
            header={ <HeaderAction links={ data.links } /> }
        >
            <Container size='xl'>
                { children }
            </Container>

        </AppShell>
    )
}
