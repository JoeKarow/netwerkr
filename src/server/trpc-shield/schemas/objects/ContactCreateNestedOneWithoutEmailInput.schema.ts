import { z } from 'zod'
import { ContactCreateWithoutEmailInputObjectSchema } from './ContactCreateWithoutEmailInput.schema'
import { ContactUncheckedCreateWithoutEmailInputObjectSchema } from './ContactUncheckedCreateWithoutEmailInput.schema'
import { ContactCreateOrConnectWithoutEmailInputObjectSchema } from './ContactCreateOrConnectWithoutEmailInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactCreateNestedOneWithoutEmailInputObjectSchema = z.union([
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
		connect: ContactWhereUniqueInputObjectSchema?.optional(),
	}),
])
