import { z } from 'zod'
import { ContactCreateWithoutSocialMediaInputObjectSchema } from './ContactCreateWithoutSocialMediaInput.schema'
import { ContactUncheckedCreateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedCreateWithoutSocialMediaInput.schema'
import { ContactCreateOrConnectWithoutSocialMediaInputObjectSchema } from './ContactCreateOrConnectWithoutSocialMediaInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactCreateNestedOneWithoutSocialMediaInputObjectSchema =
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
			connect: ContactWhereUniqueInputObjectSchema?.optional(),
		}),
	])
