import React, { PropsWithChildren } from 'react'
import { HeaderAction } from '../section'
import { links } from './navLinks'
import { AppShell, Container } from '@mantine/core'

export const MainLayout = ( { children }: PropsWithChildren ) => {


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
