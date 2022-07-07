import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutPhoneInputObjectSchema } from './ContactCreateWithoutPhoneInput.schema'
import { ContactUncheckedCreateWithoutPhoneInputObjectSchema } from './ContactUncheckedCreateWithoutPhoneInput.schema'

export const ContactCreateOrConnectWithoutPhoneInputObjectSchema = z.object({
	where: ContactWhereUniqueInputObjectSchema,
	create: z.union([
		ContactCreateWithoutPhoneInputObjectSchema,
		ContactUncheckedCreateWithoutPhoneInputObjectSchema,
	]),
})
