import React, { useState } from 'react'
import {
	UnstyledButton,
	Group,
	Avatar,
	Text,
	createStyles,
	Menu,
} from '@mantine/core'
// import { NextLink } from '@mantine/next'
import {
	Logout,
	Heart,
	Star,
	Message,
	Settings,
	SwitchHorizontal,
	ChevronDown,
} from 'tabler-icons-react'
import { useSession } from 'next-auth/react'
// import { useProviders } from '../hooks'
import { signIn, signOut } from 'next-auth/react'
// import { randomId } from '@mantine/hooks'
import { BrandTwitter } from 'tabler-icons-react'
// import { Session } from 'next-auth'

//TODO: Change menu items

const useStyles = createStyles(theme => ({
	userMenu: {
		// [ theme.fn.smallerThan( 'xs' ) ]: {
		//     display: 'none',
		// },
	},
	user: {
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		},
	},
	userActive: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},
}))

export interface UserButton {
	user: {
		image: string
		name: string
	}
}

// interface LoginProvider {
// 	name: string
// 	icon: JSX.Element
// }

export function UserButton() {
	const { classes, cx, theme } = useStyles()
	const [userMenuOpened, setUserMenuOpened] = useState(false)
	const { data: session, status } = useSession()
	const loginCallback = { callbackUrl: '/dash' }
	// const loginProviders = useProviders().map((provider: LoginProvider) => {
	//     const randId = randomId()
	//     return (<Menu.Item key={randId} icon={provider.icon} onClick={() => signIn(provider.name.toLowerCase(), loginCallback)}>
	//         {provider.name}
	//     </Menu.Item>)
	// })
	if (status !== 'authenticated') {
		return (
			<Menu
				size={260}
				placement='end'
				transition='pop-top-right'
				className={classes.userMenu}
				onClose={() => setUserMenuOpened(false)}
				onOpen={() => setUserMenuOpened(true)}
				control={
					<UnstyledButton
						className={cx(classes.user, {
							[classes.userActive]: userMenuOpened,
						})}
					>
						<Group spacing={7}>
							<Text weight={500} size='sm' sx={{ lineHeight: 1 }} mr={3}>
								Log In
							</Text>
							<ChevronDown size={12} />
						</Group>
					</UnstyledButton>
				}
			>
				<Menu.Item
					icon={<BrandTwitter size={18} />}
					onClick={() => signIn('twitter', loginCallback)}
				>
					Twitter
				</Menu.Item>
			</Menu>
		)
	}
	// if (session) {
	//     session.user.image ? session.user.image : session.user.image = 'http://example.com'
	//     session.user.name ? session.user.name : session.user.name = 'User User'
	// }
	return (
		<Menu
			size={260}
			placement='end'
			transition='pop-top-right'
			className={classes.userMenu}
			onClose={() => setUserMenuOpened(false)}
			onOpen={() => setUserMenuOpened(true)}
			control={
				<UnstyledButton
					className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
				>
					<Group spacing={7}>
						<Avatar
							src={session.user.image}
							alt={session.user.name || ''}
							radius='xl'
							size={20}
						/>
						<Text weight={500} size='sm' sx={{ lineHeight: 1 }} mr={3}>
							{session?.user?.name}
						</Text>
						<ChevronDown size={12} />
					</Group>
				</UnstyledButton>
			}
		>
			<Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
				Liked posts
			</Menu.Item>
			<Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
				Saved posts
			</Menu.Item>
			<Menu.Item icon={<Message size={14} color={theme.colors.blue[6]} />}>
				Your comments
			</Menu.Item>

			<Menu.Label>Settings</Menu.Label>
			<Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
			<Menu.Item icon={<SwitchHorizontal size={14} />}>
				Change account
			</Menu.Item>
			<Menu.Item icon={<Logout size={14} />} onClick={() => signOut()}>
				Logout
			</Menu.Item>
		</Menu>
	)
}
