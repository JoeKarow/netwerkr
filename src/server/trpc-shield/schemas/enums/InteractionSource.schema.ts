import { z } from 'zod'

export const InteractionSourceSchema = z.enum([
	'Twitter',
	'LinkedIn',
	'PhoneCall',
	'SMS',
	'Email',
	'DM',
	'InPerson',
])
