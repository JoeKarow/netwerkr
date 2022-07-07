import { z } from 'zod'
import { ContactCreateWithoutProfileForUserInputObjectSchema } from './ContactCreateWithoutProfileForUserInput.schema'
import { ContactUncheckedCreateWithoutProfileForUserInputObjectSchema } from './ContactUncheckedCreateWithoutProfileForUserInput.schema'
import { ContactCreateOrConnectWithoutProfileForUserInputObjectSchema } from './ContactCreateOrConnectWithoutProfileForUserInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactCreateNestedOneWithoutProfileForUserInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactCreateWithoutProfileForUserInputObjectSchema,
					ContactUncheckedCreateWithoutProfileForUserInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				ContactCreateOrConnectWithoutProfileForUserInputObjectSchema?.optional(),
		}),
		z.object({
			connect: ContactWhereUniqueInputObjectSchema?.optional(),
		}),
	])
