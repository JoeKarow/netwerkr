import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'email',
	'emailVerified',
	'image',
	'twitterList',
	'role',
	'disabled',
	'createdAt',
	'updatedAt',
])
