import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutInteractionsInputObjectSchema } from './ContactCreateWithoutInteractionsInput.schema'
import { ContactUncheckedCreateWithoutInteractionsInputObjectSchema } from './ContactUncheckedCreateWithoutInteractionsInput.schema'

export const ContactCreateOrConnectWithoutInteractionsInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		create: z.union([
			ContactCreateWithoutInteractionsInputObjectSchema,
			ContactUncheckedCreateWithoutInteractionsInputObjectSchema,
		]),
	})
