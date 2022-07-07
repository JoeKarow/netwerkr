import { z } from 'zod'
import { ContactUpdateWithoutProfileForUserInputObjectSchema } from './ContactUpdateWithoutProfileForUserInput.schema'
import { ContactUncheckedUpdateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedUpdateWithoutProfileForUserInput.schema'
import { ContactCreateWithoutProfileForUserInputObjectSchema } from './ContactCreateWithoutProfileForUserInput.schema'
import { ContactUncheckedCreateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedCreateWithoutProfileForUserInput.schema'

export const ContactUpsertWithoutProfileForUserInputObjectSchema = z.object({
	update: z.union([
		ContactUpdateWithoutProfileForUserInputObjectSchema,
		ContactUncheckedUpdateWithoutProfileForUserInputObjectSchema,
	]),
	create: z.union([
		ContactCreateWithoutProfileForUserInputObjectSchema,
		ContactUncheckedCreateWithoutProfileForUserInputObjectSchema,
	]),
})
