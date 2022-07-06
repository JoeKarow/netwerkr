import React, { FC, PropsWithChildren } from 'react'
import { HeaderAction } from '../section'
import { links } from './navLinks'
import { AppShell, Container } from '@mantine/core'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AppShell header={<HeaderAction links={links} />}>
			<Container size='xl'>{children}</Container>
		</AppShell>
	)
}
