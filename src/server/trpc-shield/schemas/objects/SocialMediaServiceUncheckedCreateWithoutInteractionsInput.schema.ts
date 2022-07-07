import { z } from 'zod'
import { SocialMediaUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateNestedManyWithoutServiceInput.schema'

export const SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		name: z.string(),
		urlbase: z.string(),
		SocialMedia:
			SocialMediaUncheckedCreateNestedManyWithoutServiceInputObjectSchema?.optional(),
	})
