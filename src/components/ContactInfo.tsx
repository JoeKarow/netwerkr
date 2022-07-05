import { createStyles, Avatar, Text, Group } from '@mantine/core'
import { RelatedContactModel } from '@db/zod'
import * as z from 'zod'

type Contact = z.infer<typeof RelatedContactModel>

const useStyles = createStyles(theme => ({
	icon: {
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[3]
				: theme.colors.gray[5],
	},

	name: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}))

const ContactInfo = ({
	firstName,
	lastName,
	photo,
	phone,
	email,
	socialMedia,
	onTwitterList,
}: Contact) => {
	return (
		<Group noWrap>
			<Avatar src={photo} radius='md' />
		</Group>
	)
}

export default ContactInfo
