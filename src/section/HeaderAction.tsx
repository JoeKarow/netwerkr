import React from 'react'
import {
	createStyles,
	Menu,
	Center,
	Header,
	Container,
	Group,
	Button,
	Burger,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { ChevronDown, User } from 'tabler-icons-react'
import { UserButton } from '~/components'

const HEADER_HEIGHT = 60

const useStyles = createStyles(theme => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}))

// interface HeaderActionProps {
//     links: { link: string; label: string; links: { link: string; label: string }[] }[];
// }

/**
 * Links is an object with a link, label, and links property. The links property is an array of objects
 * with a link and label property.
 * @property {string} link - The link to the page
 * @property {string} label - The label for the link.
 * @property links - This is the array of links that will be displayed in the navigation bar.
 */
type Links = {
	link: string
	label: string
	links: [
		{
			link: string
			label: string
		}
	]
}

/**
 * Props is an object that has a property called links that is an array of Links.
 * @property {Links[]} links - Links[]
 */
interface Props {
	links: Links[]
}

export function HeaderAction({ links }: Props) {
	const { classes } = useStyles()
	const [opened, toggleOpened] = useBooleanToggle(false)
	const items = links.map(link => {
		const menuItems = link.links?.map(item => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		))

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger='hover'
					delay={0}
					transitionDuration={0}
					placement='end'
					gutter={1}
					control={
						<a
							href={link.link}
							className={classes.link}
							onClick={event => event.preventDefault()}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<ChevronDown size={12} />
							</Center>
						</a>
					}
				>
					{menuItems}
				</Menu>
			)
		}

		return (
			<a
				key={link.label}
				href={link.link}
				className={classes.link}
				onClick={event => event.preventDefault()}
			>
				{link.label}
			</a>
		)
	})

	return (
		<Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
			<Container className={classes.inner} fluid>
				<Group>
					<Burger
						opened={opened}
						onClick={() => toggleOpened()}
						className={classes.burger}
						size='sm'
					/>
					<h1>netwerkr</h1>
				</Group>
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>
				<UserButton />
			</Container>
		</Header>
	)
}
