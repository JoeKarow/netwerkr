import { z } from 'zod'

export const ConversationScalarFieldEnumSchema = z.enum([
	'id',
	'twitterConvoId',
	'interactionsId',
])
