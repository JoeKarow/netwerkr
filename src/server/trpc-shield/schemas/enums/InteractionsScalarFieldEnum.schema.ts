import { z } from 'zod'

export const InteractionsScalarFieldEnumSchema = z.enum([
	'id',
	'contactId',
	'source',
	'time',
	'content',
	'extPostId',
	'createdAt',
	'updatedAt',
	'socialMediaServiceId',
])
