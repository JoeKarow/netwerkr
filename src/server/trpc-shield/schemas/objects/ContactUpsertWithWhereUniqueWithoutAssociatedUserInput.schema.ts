import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithoutAssociatedUserInputObjectSchema } from './ContactUpdateWithoutAssociatedUserInput.schema'
import { ContactUncheckedUpdateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedUpdateWithoutAssociatedUserInput.schema'
import { ContactCreateWithoutAssociatedUserInputObjectSchema } from './ContactCreateWithoutAssociatedUserInput.schema'
import { ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateWithoutAssociatedUserInput.schema'

export const ContactUpsertWithWhereUniqueWithoutAssociatedUserInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		update: z.union([
			ContactUpdateWithoutAssociatedUserInputObjectSchema,
			ContactUncheckedUpdateWithoutAssociatedUserInputObjectSchema,
		]),
		create: z.union([
			ContactCreateWithoutAssociatedUserInputObjectSchema,
			ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema,
		]),
	})
