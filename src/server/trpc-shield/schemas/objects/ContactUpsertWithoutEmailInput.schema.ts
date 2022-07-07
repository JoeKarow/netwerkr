import { z } from 'zod'
import { ContactUpdateWithoutEmailInputObjectSchema } from './ContactUpdateWithoutEmailInput.schema'
import { ContactUncheckedUpdateWithoutEmailInputObjectSchema } from './ContactUncheckedUpdateWithoutEmailInput.schema'
import { ContactCreateWithoutEmailInputObjectSchema } from './ContactCreateWithoutEmailInput.schema'
import { ContactUncheckedCreateWithoutEmailInputObjectSchema } from './ContactUncheckedCreateWithoutEmailInput.schema'

export const ContactUpsertWithoutEmailInputObjectSchema = z.object({
	update: z.union([
		ContactUpdateWithoutEmailInputObjectSchema,
		ContactUncheckedUpdateWithoutEmailInputObjectSchema,
	]),
	create: z.union([
		ContactCreateWithoutEmailInputObjectSchema,
		ContactUncheckedCreateWithoutEmailInputObjectSchema,
	]),
})
