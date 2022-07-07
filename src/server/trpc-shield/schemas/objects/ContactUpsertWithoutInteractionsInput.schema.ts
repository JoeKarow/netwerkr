import { z } from 'zod'
import { ContactUpdateWithoutInteractionsInputObjectSchema } from './ContactUpdateWithoutInteractionsInput.schema'
import { ContactUncheckedUpdateWithoutInteractionsInputObjectSchema } from './ContactUncheckedUpdateWithoutInteractionsInput.schema'
import { ContactCreateWithoutInteractionsInputObjectSchema } from './ContactCreateWithoutInteractionsInput.schema'
import { ContactUncheckedCreateWithoutInteractionsInputObjectSchema } from './ContactUncheckedCreateWithoutInteractionsInput.schema'

export const ContactUpsertWithoutInteractionsInputObjectSchema = z.object({
	update: z.union([
		ContactUpdateWithoutInteractionsInputObjectSchema,
		ContactUncheckedUpdateWithoutInteractionsInputObjectSchema,
	]),
	create: z.union([
		ContactCreateWithoutInteractionsInputObjectSchema,
		ContactUncheckedCreateWithoutInteractionsInputObjectSchema,
	]),
})
