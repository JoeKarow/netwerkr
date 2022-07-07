import { z } from 'zod'
import { ContactPhoneScalarWhereInputObjectSchema } from './ContactPhoneScalarWhereInput.schema'
import { ContactPhoneUpdateManyMutationInputObjectSchema } from './ContactPhoneUpdateManyMutationInput.schema'
import { ContactPhoneUncheckedUpdateManyWithoutPhoneInputObjectSchema } from './ContactPhoneUncheckedUpdateManyWithoutPhoneInput.schema'

export const ContactPhoneUpdateManyWithWhereWithoutContactInputObjectSchema =
	z.object({
		where: ContactPhoneScalarWhereInputObjectSchema,
		data: z.union([
			ContactPhoneUpdateManyMutationInputObjectSchema,
			ContactPhoneUncheckedUpdateManyWithoutPhoneInputObjectSchema,
		]),
	})
