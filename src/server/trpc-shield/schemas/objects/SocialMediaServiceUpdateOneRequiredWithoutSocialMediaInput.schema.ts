import { z } from 'zod'
import { SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceCreateOrConnectWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateOrConnectWithoutSocialMediaInput.schema'
import { SocialMediaServiceUpsertWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUpsertWithoutSocialMediaInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceUpdateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUpdateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedUpdateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedUpdateWithoutSocialMediaInput.schema'

export const SocialMediaServiceUpdateOneRequiredWithoutSocialMediaInputObjectSchema =
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
			upsert:
				SocialMediaServiceUpsertWithoutSocialMediaInputObjectSchema?.optional(),
		}),
		z.object({
			connect: SocialMediaServiceWhereUniqueInputObjectSchema?.optional(),
		}),
		z.object({
			update: z
				.union([
					SocialMediaServiceUpdateWithoutSocialMediaInputObjectSchema,
					SocialMediaServiceUncheckedUpdateWithoutSocialMediaInputObjectSchema,
				])
				?.optional(),
		}),
	])
