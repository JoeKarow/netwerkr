import { z } from 'zod'
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema'
import { ContactUpdateManyMutationInputObjectSchema } from './ContactUpdateManyMutationInput.schema'
import { ContactUncheckedUpdateManyWithoutContactsInputObjectSchema } from './ContactUncheckedUpdateManyWithoutContactsInput.schema'

export const ContactUpdateManyWithWhereWithoutAssociatedUserInputObjectSchema =
	z.object({
		where: ContactScalarWhereInputObjectSchema,
		data: z.union([
			ContactUpdateManyMutationInputObjectSchema,
			ContactUncheckedUpdateManyWithoutContactsInputObjectSchema,
		]),
	})
