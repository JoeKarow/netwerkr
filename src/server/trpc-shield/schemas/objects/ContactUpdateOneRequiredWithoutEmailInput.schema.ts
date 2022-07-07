import { z } from 'zod'
import { ContactCreateWithoutEmailInputObjectSchema } from './ContactCreateWithoutEmailInput.schema'
import { ContactUncheckedCreateWithoutEmailInputObjectSchema } from './ContactUncheckedCreateWithoutEmailInput.schema'
import { ContactCreateOrConnectWithoutEmailInputObjectSchema } from './ContactCreateOrConnectWithoutEmailInput.schema'
import { ContactUpsertWithoutEmailInputObjectSchema } from './ContactUpsertWithoutEmailInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutEmailInputObjectSchema } from './ContactUpdateWithoutEmailInput.schema'
import { ContactUncheckedUpdateWithoutEmailInputObjectSchema } from './ContactUncheckedUpdateWithoutEmailInput.schema'

export const ContactUpdateOneRequiredWithoutEmailInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				ContactCreateWithoutEmailInputObjectSchema,
				ContactUncheckedCreateWithoutEmailInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			ContactCreateOrConnectWithoutEmailInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: ContactUpsertWithoutEmailInputObjectSchema?.optional(),
	}),
	z.object({
		connect: ContactWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				ContactUpdateWithoutEmailInputObjectSchema,
				ContactUncheckedUpdateWithoutEmailInputObjectSchema,
			])
			?.optional(),
	}),
])
