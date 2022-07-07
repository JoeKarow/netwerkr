import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneCreateWithoutContactInputObjectSchema } from './ContactPhoneCreateWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateWithoutContactInput.schema'

export const ContactPhoneCreateOrConnectWithoutContactInputObjectSchema =
	z.object({
		where: ContactPhoneWhereUniqueInputObjectSchema,
		create: z.union([
			ContactPhoneCreateWithoutContactInputObjectSchema,
			ContactPhoneUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
