import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneUpdateWithoutContactInputObjectSchema } from './ContactPhoneUpdateWithoutContactInput.schema'
import { ContactPhoneUncheckedUpdateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedUpdateWithoutContactInput.schema'

export const ContactPhoneUpdateWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: ContactPhoneWhereUniqueInputObjectSchema,
		data: z.union([
			ContactPhoneUpdateWithoutContactInputObjectSchema,
			ContactPhoneUncheckedUpdateWithoutContactInputObjectSchema,
		]),
	})
