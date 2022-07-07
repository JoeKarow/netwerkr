import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactCreateWithoutProfileForUserInputObjectSchema } from './ContactCreateWithoutProfileForUserInput.schema'
import { ContactUncheckedCreateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedCreateWithoutProfileForUserInput.schema'

export const ContactCreateOrConnectWithoutProfileForUserInputObjectSchema =
	z.object({
		where: ContactWhereUniqueInputObjectSchema,
		create: z.union([
			ContactCreateWithoutProfileForUserInputObjectSchema,
			ContactUncheckedCreateWithoutProfileForUserInputObjectSchema,
		]),
	})
