import { z } from 'zod'
import { ContactCreateWithoutSocialMediaInputObjectSchema } from './ContactCreateWithoutSocialMediaInput.schema'
import { ContactUncheckedCreateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedCreateWithoutSocialMediaInput.schema'
import { ContactCreateOrConnectWithoutSocialMediaInputObjectSchema } from './ContactCreateOrConnectWithoutSocialMediaInput.schema'
import { ContactUpsertWithoutSocialMediaInputObjectSchema } from './ContactUpsertWithoutSocialMediaInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutSocialMediaInputObjectSchema } from './ContactUpdateWithoutSocialMediaInput.schema'
import { ContactUncheckedUpdateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedUpdateWithoutSocialMediaInput.schema'

export const ContactUpdateOneRequiredWithoutSocialMediaInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactCreateWithoutSocialMediaInputObjectSchema,
					ContactUncheckedCreateWithoutSocialMediaInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				ContactCreateOrConnectWithoutSocialMediaInputObjectSchema?.optional(),
		}),
		z.object({
			upsert: ContactUpsertWithoutSocialMediaInputObjectSchema?.optional(),
		}),
		z.object({
			connect: ContactWhereUniqueInputObjectSchema?.optional(),
		}),
		z.object({
			update: z
				.union([
					ContactUpdateWithoutSocialMediaInputObjectSchema,
					ContactUncheckedUpdateWithoutSocialMediaInputObjectSchema,
				])
				?.optional(),
		}),
	])
