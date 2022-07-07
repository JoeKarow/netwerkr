import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutAssociatedUserInputObjectSchema } from './ContactUpdateWithoutAssociatedUserInput.schema'
import { ContactUncheckedUpdateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedUpdateWithoutAssociatedUserInput.schema'

export const ContactUpdateWithWhereUniqueWithoutAssociatedUserInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		data: z.union([
			ContactUpdateWithoutAssociatedUserInputObjectSchema,
			ContactUncheckedUpdateWithoutAssociatedUserInputObjectSchema,
		]),
	})
