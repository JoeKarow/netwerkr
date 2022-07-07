import { z } from 'zod'
import { SocialMediaCreateNestedManyWithoutServiceInputObjectSchema } from './SocialMediaCreateNestedManyWithoutServiceInput.schema'

export const SocialMediaServiceCreateWithoutInteractionsInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		name: z.string(),
		urlbase: z.string(),
		SocialMedia:
			SocialMediaCreateNestedManyWithoutServiceInputObjectSchema?.optional(),
	})
