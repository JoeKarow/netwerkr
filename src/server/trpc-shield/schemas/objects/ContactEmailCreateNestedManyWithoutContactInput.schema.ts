import { z } from 'zod'
import { ContactEmailCreateWithoutContactInputObjectSchema } from './ContactEmailCreateWithoutContactInput.schema'
import { ContactEmailUncheckedCreateWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateWithoutContactInput.schema'
import { ContactEmailCreateOrConnectWithoutContactInputObjectSchema } from './ContactEmailCreateOrConnectWithoutContactInput.schema'
import { ContactEmailCreateManyContactInputEnvelopeObjectSchema } from './ContactEmailCreateManyContactInputEnvelope.schema'
import { ContactEmailWhereUniqueInputObjectSchema } from './ContactEmailWhereUniqueInput.schema'

export const ContactEmailCreateNestedManyWithoutContactInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactEmailCreateWithoutContactInputObjectSchema,
					z.array(ContactEmailCreateWithoutContactInputObjectSchema),
					ContactEmailUncheckedCreateWithoutContactInputObjectSchema,
					z.array(ContactEmailUncheckedCreateWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ContactEmailCreateOrConnectWithoutContactInputObjectSchema,
					z.array(ContactEmailCreateOrConnectWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ContactEmailCreateManyContactInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ContactEmailWhereUniqueInputObjectSchema,
					z.array(ContactEmailWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
