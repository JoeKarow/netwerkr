import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithoutContactInputObjectSchema } from './SocialMediaUpdateWithoutContactInput.schema'
import { SocialMediaUncheckedUpdateWithoutContactInputObjectSchema } from './SocialMediaUncheckedUpdateWithoutContactInput.schema'
import { SocialMediaCreateWithoutContactInputObjectSchema } from './SocialMediaCreateWithoutContactInput.schema'
import { SocialMediaUncheckedCreateWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateWithoutContactInput.schema'

export const SocialMediaUpsertWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		update: z.union([
			SocialMediaUpdateWithoutContactInputObjectSchema,
			SocialMediaUncheckedUpdateWithoutContactInputObjectSchema,
		]),
		create: z.union([
			SocialMediaCreateWithoutContactInputObjectSchema,
			SocialMediaUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
