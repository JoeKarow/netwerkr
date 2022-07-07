import { z } from 'zod'

export const ContactScalarFieldEnumSchema = z.enum([
	'id',
	'firstName',
	'lastName',
	'photo',
	'onTwitterList',
	'createdAt',
	'associatedUserId',
])
