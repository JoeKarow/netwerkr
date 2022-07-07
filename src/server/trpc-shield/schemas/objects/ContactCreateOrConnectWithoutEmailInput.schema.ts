import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutEmailInputObjectSchema } from './ContactCreateWithoutEmailInput.schema'
import { ContactUncheckedCreateWithoutEmailInputObjectSchema } from './ContactUncheckedCreateWithoutEmailInput.schema'

export const ContactCreateOrConnectWithoutEmailInputObjectSchema = z.object({
	where: ContactWhereUniqueInputObjectSchema,
	create: z.union([
		ContactCreateWithoutEmailInputObjectSchema,
		ContactUncheckedCreateWithoutEmailInputObjectSchema,
	]),
})
