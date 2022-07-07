import { z } from 'zod'
import { ContactCreateWithoutPhoneInputObjectSchema } from './ContactCreateWithoutPhoneInput.schema'
import { ContactUncheckedCreateWithoutPhoneInputObjectSchema } from './ContactUncheckedCreateWithoutPhoneInput.schema'
import { ContactCreateOrConnectWithoutPhoneInputObjectSchema } from './ContactCreateOrConnectWithoutPhoneInput.schema'
import { ContactUpsertWithoutPhoneInputObjectSchema } from './ContactUpsertWithoutPhoneInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutPhoneInputObjectSchema } from './ContactUpdateWithoutPhoneInput.schema'
import { ContactUncheckedUpdateWithoutPhoneInputObjectSchema } from './ContactUncheckedUpdateWithoutPhoneInput.schema'

export const ContactUpdateOneRequiredWithoutPhoneInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				ContactCreateWithoutPhoneInputObjectSchema,
				ContactUncheckedCreateWithoutPhoneInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			ContactCreateOrConnectWithoutPhoneInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: ContactUpsertWithoutPhoneInputObjectSchema?.optional(),
	}),
	z.object({
		connect: ContactWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				ContactUpdateWithoutPhoneInputObjectSchema,
				ContactUncheckedUpdateWithoutPhoneInputObjectSchema,
			])
			?.optional(),
	}),
])
