import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithoutServiceInputObjectSchema } from './SocialMediaUpdateWithoutServiceInput.schema'
import { SocialMediaUncheckedUpdateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedUpdateWithoutServiceInput.schema'

export const SocialMediaUpdateWithWhereUniqueWithoutServiceInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		data: z.union([
			SocialMediaUpdateWithoutServiceInputObjectSchema,
			SocialMediaUncheckedUpdateWithoutServiceInputObjectSchema,
		]),
	})
