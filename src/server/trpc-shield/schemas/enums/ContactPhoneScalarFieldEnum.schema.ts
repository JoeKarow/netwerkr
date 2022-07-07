import { z } from 'zod'

export const ContactPhoneScalarFieldEnumSchema = z.enum([
	'id',
	'number',
	'label',
	'primary',
	'contactId',
	'createdAt',
	'updatedAt',
])
