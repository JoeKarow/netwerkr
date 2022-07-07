import { z } from 'zod'
import { ContactUpdateWithoutSocialMediaInputObjectSchema } from './ContactUpdateWithoutSocialMediaInput.schema'
import { ContactUncheckedUpdateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedUpdateWithoutSocialMediaInput.schema'
import { ContactCreateWithoutSocialMediaInputObjectSchema } from './ContactCreateWithoutSocialMediaInput.schema'
import { ContactUncheckedCreateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedCreateWithoutSocialMediaInput.schema'

export const ContactUpsertWithoutSocialMediaInputObjectSchema = z.object({
	update: z.union([
		ContactUpdateWithoutSocialMediaInputObjectSchema,
		ContactUncheckedUpdateWithoutSocialMediaInputObjectSchema,
	]),
	create: z.union([
		ContactCreateWithoutSocialMediaInputObjectSchema,
		ContactUncheckedCreateWithoutSocialMediaInputObjectSchema,
	]),
})
