import { z } from 'zod'
import { ContactCreateWithoutAssociatedUserInputObjectSchema } from './ContactCreateWithoutAssociatedUserInput.schema'
import { ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateWithoutAssociatedUserInput.schema'
import { ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema } from './ContactCreateOrConnectWithoutAssociatedUserInput.schema'
import { ContactCreateManyAssociatedUserInputEnvelopeObjectSchema } from './ContactCreateManyAssociatedUserInputEnvelope.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

export const ContactUncheckedCreateNestedManyWithoutAssociatedUserInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactCreateWithoutAssociatedUserInputObjectSchema,
					z.array(ContactCreateWithoutAssociatedUserInputObjectSchema),
					ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema,
					z.array(ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema,
					z.array(ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ContactCreateManyAssociatedUserInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ContactWhereUniqueInputObjectSchema,
					z.array(ContactWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
