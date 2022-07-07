import { z } from 'zod'

export const ContactEmailScalarFieldEnumSchema = z.enum([
	'id',
	'email',
	'primary',
	'label',
	'createdAt',
	'updatedAt',
	'contactId',
])
