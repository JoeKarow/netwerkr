import { z } from 'zod'
import { ContactCreateWithoutPhoneInputObjectSchema } from './ContactCreateWithoutPhoneInput.schema'
import { ContactUncheckedCreateWithoutPhoneInputObjectSchema } from './ContactUncheckedCreateWithoutPhoneInput.schema'
import { ContactCreateOrConnectWithoutPhoneInputObjectSchema } from './ContactCreateOrConnectWithoutPhoneInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactCreateNestedOneWithoutPhoneInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				ContactCreateWithoutPhoneInputObjectSchema,
				ContactUncheckedCreateWithoutPhoneInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			ContactCreateOrConnectWithoutPhoneInputObjectSchema?.optional(),
	}),
	z.object({
		connect: ContactWhereUniqueInputObjectSchema?.optional(),
	}),
])
