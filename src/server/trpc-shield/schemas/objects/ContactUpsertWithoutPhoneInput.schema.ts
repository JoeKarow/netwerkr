import { z } from 'zod'
import { ContactUpdateWithoutPhoneInputObjectSchema } from './ContactUpdateWithoutPhoneInput.schema'
import { ContactUncheckedUpdateWithoutPhoneInputObjectSchema } from './ContactUncheckedUpdateWithoutPhoneInput.schema'
import { ContactCreateWithoutPhoneInputObjectSchema } from './ContactCreateWithoutPhoneInput.schema'
import { ContactUncheckedCreateWithoutPhoneInputObjectSchema } from './ContactUncheckedCreateWithoutPhoneInput.schema'

export const ContactUpsertWithoutPhoneInputObjectSchema = z.object({
	update: z.union([
		ContactUpdateWithoutPhoneInputObjectSchema,
		ContactUncheckedUpdateWithoutPhoneInputObjectSchema,
	]),
	create: z.union([
		ContactCreateWithoutPhoneInputObjectSchema,
		ContactUncheckedCreateWithoutPhoneInputObjectSchema,
	]),
})
