import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaCreateWithoutServiceInputObjectSchema } from './SocialMediaCreateWithoutServiceInput.schema'
import { SocialMediaUncheckedCreateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateWithoutServiceInput.schema'

export const SocialMediaCreateOrConnectWithoutServiceInputObjectSchema =
	z.object({
		where: SocialMediaWhereUniqueInputObjectSchema,
		create: z.union([
			SocialMediaCreateWithoutServiceInputObjectSchema,
			SocialMediaUncheckedCreateWithoutServiceInputObjectSchema,
		]),
	})
