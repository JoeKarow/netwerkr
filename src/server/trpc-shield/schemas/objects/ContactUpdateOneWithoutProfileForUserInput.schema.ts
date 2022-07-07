import { z } from 'zod'
import { ContactCreateWithoutProfileForUserInputObjectSchema } from './ContactCreateWithoutProfileForUserInput.schema'
import { ContactUncheckedCreateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedCreateWithoutProfileForUserInput.schema'
import { ContactCreateOrConnectWithoutProfileForUserInputObjectSchema } from './ContactCreateOrConnectWithoutProfileForUserInput.schema'
import { ContactUpsertWithoutProfileForUserInputObjectSchema } from './ContactUpsertWithoutProfileForUserInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutProfileForUserInputObjectSchema } from './ContactUpdateWithoutProfileForUserInput.schema'
import { ContactUncheckedUpdateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedUpdateWithoutProfileForUserInput.schema'

export const ContactUpdateOneWithoutProfileForUserInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				ContactCreateWithoutProfileForUserInputObjectSchema,
				ContactUncheckedCreateWithoutProfileForUserInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			ContactCreateOrConnectWithoutProfileForUserInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: ContactUpsertWithoutProfileForUserInputObjectSchema?.optional(),
	}),
	z.object({
		disconnect: z.boolean()?.optional(),
	}),
	z.object({
		delete: z.boolean()?.optional(),
	}),
	z.object({
		connect: ContactWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				ContactUpdateWithoutProfileForUserInputObjectSchema,
				ContactUncheckedUpdateWithoutProfileForUserInputObjectSchema,
			])
			?.optional(),
	}),
])
