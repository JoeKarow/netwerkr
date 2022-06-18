import React from 'react'
import { NavbarNested, HeaderUser } from '../section'
import { links } from './navLinks'
import { AppShell, Container } from '@mantine/core'
import { user } from '../mockdata'

export const DashLayout = ( { children } ) => {

    return (
        <AppShell
            header={ <HeaderUser user={ user } /> }
            navbar={ <NavbarNested /> }
        >
            <Container size='xl'>
                { children }
            </Container>

        </AppShell>
    )
}
