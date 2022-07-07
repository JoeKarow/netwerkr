import { z } from 'zod'
import { ContactEmailScalarWhereInputObjectSchema } from './ContactEmailScalarWhereInput.schema'
import { ContactEmailUpdateManyMutationInputObjectSchema } from './ContactEmailUpdateManyMutationInput.schema'
import { ContactEmailUncheckedUpdateManyWithoutEmailInputObjectSchema } from './ContactEmailUncheckedUpdateManyWithoutEmailInput.schema'

export const ContactEmailUpdateManyWithWhereWithoutContactInputObjectSchema =
	z.object({
		where: ContactEmailScalarWhereInputObjectSchema,
		data: z.union([
			ContactEmailUpdateManyMutationInputObjectSchema,
			ContactEmailUncheckedUpdateManyWithoutEmailInputObjectSchema,
		]),
	})
