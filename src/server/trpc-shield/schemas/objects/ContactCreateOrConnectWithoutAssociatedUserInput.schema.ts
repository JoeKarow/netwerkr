import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutAssociatedUserInputObjectSchema } from './ContactCreateWithoutAssociatedUserInput.schema'
import { ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateWithoutAssociatedUserInput.schema'

export const ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		create: z.union([
			ContactCreateWithoutAssociatedUserInputObjectSchema,
			ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema,
		]),
	})
