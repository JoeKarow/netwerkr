import React from 'react'
import {
	Avatar,
	Table,
	Group,
	Text,
	ActionIcon,
	Anchor,
	ScrollArea,
} from '@mantine/core'
import { Pencil, Trash } from 'tabler-icons-react'

interface ContactsTableProps {
	data: {
		photo: string
		firstName: string
		lastName: string
		socialMedia: string[]
		email: string[]
		phone: string[]
	}[]
}

export function ContactsTable({ data }: ContactsTableProps) {
	if (!data) return <p>no data</p>
	console.log(data)

	const rows = data.map(item => (
		<tr key={`${item.firstName}${item.lastName}`}>
			<td>
				<Group spacing='sm'>
					<Avatar size={30} src={item.photo} radius={30} />
					<Text size='sm' weight={500}>
						{item.firstName} {item.lastName}
					</Text>
				</Group>
			</td>

			<td>{item.socialMedia[0].username}</td>
			<td>
				<Anchor<'a'>
					size='sm'
					href='#'
					onClick={event => event.preventDefault()}
				>
					{item.email[0].email}
				</Anchor>
			</td>
			<td>
				<Text size='sm' color='gray'>
					{item.phone[0].number}
				</Text>
			</td>
			<td>
				<Group spacing={0} position='right'>
					<ActionIcon>
						<Pencil size={16} />
					</ActionIcon>
					<ActionIcon color='red'>
						<Trash size={16} />
					</ActionIcon>
				</Group>
			</td>
		</tr>
	))

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800 }} verticalSpacing='sm'>
				<thead>
					<tr>
						<th>Employee</th>
						<th>Job title</th>
						<th>Email</th>
						<th>Phone</th>
						<th />
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	)
}
