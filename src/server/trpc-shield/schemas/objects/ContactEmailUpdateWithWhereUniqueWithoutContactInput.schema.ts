import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './ContactEmailWhereUniqueInput.schema'
import { ContactEmailUpdateWithoutContactInputObjectSchema } from './ContactEmailUpdateWithoutContactInput.schema'
import { ContactEmailUncheckedUpdateWithoutContactInputObjectSchema } from './ContactEmailUncheckedUpdateWithoutContactInput.schema'

export const ContactEmailUpdateWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: ContactEmailWhereUniqueInputObjectSchema,
		data: z.union([
			ContactEmailUpdateWithoutContactInputObjectSchema,
			ContactEmailUncheckedUpdateWithoutContactInputObjectSchema,
		]),
	})
