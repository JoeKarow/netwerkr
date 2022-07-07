import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutSocialMediaInputObjectSchema } from './ContactCreateWithoutSocialMediaInput.schema'
import { ContactUncheckedCreateWithoutSocialMediaInputObjectSchema } from './ContactUncheckedCreateWithoutSocialMediaInput.schema'

export const ContactCreateOrConnectWithoutSocialMediaInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		create: z.union([
			ContactCreateWithoutSocialMediaInputObjectSchema,
			ContactUncheckedCreateWithoutSocialMediaInputObjectSchema,
		]),
	})
