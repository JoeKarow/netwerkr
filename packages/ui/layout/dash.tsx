import React from 'react'
import { NavbarNested, HeaderUser } from '../section'
import { AppShell, Container } from '@mantine/core'

export const DashLayout = ( { children } ) => {

    return (
        <AppShell
            header={ <HeaderUser /> }
            navbar={ <NavbarNested /> }
        >
            <Container size='xl'>
                { children }
            </Container>

        </AppShell>
    )
}
