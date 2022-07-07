import { z } from 'zod'
import { ContactCreateWithoutInteractionsInputObjectSchema } from './ContactCreateWithoutInteractionsInput.schema'
import { ContactUncheckedCreateWithoutInteractionsInputObjectSchema } from './ContactUncheckedCreateWithoutInteractionsInput.schema'
import { ContactCreateOrConnectWithoutInteractionsInputObjectSchema } from './ContactCreateOrConnectWithoutInteractionsInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactCreateNestedOneWithoutInteractionsInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactCreateWithoutInteractionsInputObjectSchema,
					ContactUncheckedCreateWithoutInteractionsInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				ContactCreateOrConnectWithoutInteractionsInputObjectSchema?.optional(),
		}),
		z.object({
			connect: ContactWhereUniqueInputObjectSchema?.optional(),
		}),
	])
