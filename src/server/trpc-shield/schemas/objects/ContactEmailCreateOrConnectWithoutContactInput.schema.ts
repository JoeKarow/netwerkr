import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './ContactEmailWhereUniqueInput.schema'
import { ContactEmailCreateWithoutContactInputObjectSchema } from './ContactEmailCreateWithoutContactInput.schema'
import { ContactEmailUncheckedCreateWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateWithoutContactInput.schema'

export const ContactEmailCreateOrConnectWithoutContactInputObjectSchema =
	z.object({
		where: ContactEmailWhereUniqueInputObjectSchema,
		create: z.union([
			ContactEmailCreateWithoutContactInputObjectSchema,
			ContactEmailUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
