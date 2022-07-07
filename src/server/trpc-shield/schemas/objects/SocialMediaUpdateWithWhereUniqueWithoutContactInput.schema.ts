import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithoutContactInputObjectSchema } from './SocialMediaUpdateWithoutContactInput.schema'
import { SocialMediaUncheckedUpdateWithoutContactInputObjectSchema } from './SocialMediaUncheckedUpdateWithoutContactInput.schema'

export const SocialMediaUpdateWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		data: z.union([
			SocialMediaUpdateWithoutContactInputObjectSchema,
			SocialMediaUncheckedUpdateWithoutContactInputObjectSchema,
		]),
	})
