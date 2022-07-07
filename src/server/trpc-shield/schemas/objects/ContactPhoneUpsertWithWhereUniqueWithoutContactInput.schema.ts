import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneUpdateWithoutContactInputObjectSchema } from './ContactPhoneUpdateWithoutContactInput.schema'
import { ContactPhoneUncheckedUpdateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedUpdateWithoutContactInput.schema'
import { ContactPhoneCreateWithoutContactInputObjectSchema } from './ContactPhoneCreateWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateWithoutContactInput.schema'

export const ContactPhoneUpsertWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: ContactPhoneWhereUniqueInputObjectSchema,
		update: z.union([
			ContactPhoneUpdateWithoutContactInputObjectSchema,
			ContactPhoneUncheckedUpdateWithoutContactInputObjectSchema,
		]),
		create: z.union([
			ContactPhoneCreateWithoutContactInputObjectSchema,
			ContactPhoneUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
