import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaCreateWithoutContactInputObjectSchema } from './SocialMediaCreateWithoutContactInput.schema'
import { SocialMediaUncheckedCreateWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateWithoutContactInput.schema'

export const SocialMediaCreateOrConnectWithoutContactInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		create: z.union([
			SocialMediaCreateWithoutContactInputObjectSchema,
			SocialMediaUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
