import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './ContactEmailWhereUniqueInput.schema'
import { ContactEmailUpdateWithoutContactInputObjectSchema } from './ContactEmailUpdateWithoutContactInput.schema'
import { ContactEmailUncheckedUpdateWithoutContactInputObjectSchema } from './ContactEmailUncheckedUpdateWithoutContactInput.schema'
import { ContactEmailCreateWithoutContactInputObjectSchema } from './ContactEmailCreateWithoutContactInput.schema'
import { ContactEmailUncheckedCreateWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateWithoutContactInput.schema'

export const ContactEmailUpsertWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: ContactEmailWhereUniqueInputObjectSchema,
		update: z.union([
			ContactEmailUpdateWithoutContactInputObjectSchema,
			ContactEmailUncheckedUpdateWithoutContactInputObjectSchema,
		]),
		create: z.union([
			ContactEmailCreateWithoutContactInputObjectSchema,
			ContactEmailUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
