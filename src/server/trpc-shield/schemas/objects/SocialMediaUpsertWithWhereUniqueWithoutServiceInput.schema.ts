import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithoutServiceInputObjectSchema } from './SocialMediaUpdateWithoutServiceInput.schema'
import { SocialMediaUncheckedUpdateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedUpdateWithoutServiceInput.schema'
import { SocialMediaCreateWithoutServiceInputObjectSchema } from './SocialMediaCreateWithoutServiceInput.schema'
import { SocialMediaUncheckedCreateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateWithoutServiceInput.schema'

export const SocialMediaUpsertWithWhereUniqueWithoutServiceInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		update: z.union([
			SocialMediaUpdateWithoutServiceInputObjectSchema,
			SocialMediaUncheckedUpdateWithoutServiceInputObjectSchema,
		]),
		create: z.union([
			SocialMediaCreateWithoutServiceInputObjectSchema,
			SocialMediaUncheckedCreateWithoutServiceInputObjectSchema,
		]),
	})
