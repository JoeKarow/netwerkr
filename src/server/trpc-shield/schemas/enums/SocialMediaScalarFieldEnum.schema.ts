import { z } from 'zod'

export const SocialMediaScalarFieldEnumSchema = z.enum([
	'id',
	'userId',
	'displayName',
	'username',
	'protected',
	'profileImg',
	'createdAt',
	'updatedAt',
	'contactId',
	'socialMediaServiceId',
])
