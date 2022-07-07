import { z } from 'zod'
import { ContactCreateWithoutInteractionsInputObjectSchema } from './ContactCreateWithoutInteractionsInput.schema'
import { ContactUncheckedCreateWithoutInteractionsInputObjectSchema } from './ContactUncheckedCreateWithoutInteractionsInput.schema'
import { ContactCreateOrConnectWithoutInteractionsInputObjectSchema } from './ContactCreateOrConnectWithoutInteractionsInput.schema'
import { ContactUpsertWithoutInteractionsInputObjectSchema } from './ContactUpsertWithoutInteractionsInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutInteractionsInputObjectSchema } from './ContactUpdateWithoutInteractionsInput.schema'
import { ContactUncheckedUpdateWithoutInteractionsInputObjectSchema } from './ContactUncheckedUpdateWithoutInteractionsInput.schema'

export const ContactUpdateOneRequiredWithoutInteractionsInputObjectSchema =
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
			upsert: ContactUpsertWithoutInteractionsInputObjectSchema?.optional(),
		}),
		z.object({
			connect: ContactWhereUniqueInputObjectSchema?.optional(),
		}),
		z.object({
			update: z
				.union([
					ContactUpdateWithoutInteractionsInputObjectSchema,
					ContactUncheckedUpdateWithoutInteractionsInputObjectSchema,
				])
				?.optional(),
		}),
	])
