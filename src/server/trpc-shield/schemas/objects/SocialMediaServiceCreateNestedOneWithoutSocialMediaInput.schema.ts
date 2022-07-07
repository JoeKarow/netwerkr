import { z } from 'zod'
import { SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceCreateOrConnectWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateOrConnectWithoutSocialMediaInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'

export const SocialMediaServiceCreateNestedOneWithoutSocialMediaInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema,
					SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				SocialMediaServiceCreateOrConnectWithoutSocialMediaInputObjectSchema?.optional(),
		}),
		z.object({
			connect: SocialMediaServiceWhereUniqueInputObjectSchema?.optional(),
		}),
	])
