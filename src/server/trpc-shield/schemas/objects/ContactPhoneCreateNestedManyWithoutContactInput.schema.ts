import { z } from 'zod'
import { ContactPhoneCreateWithoutContactInputObjectSchema } from './ContactPhoneCreateWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateWithoutContactInput.schema'
import { ContactPhoneCreateOrConnectWithoutContactInputObjectSchema } from './ContactPhoneCreateOrConnectWithoutContactInput.schema'
import { ContactPhoneCreateManyContactInputEnvelopeObjectSchema } from './ContactPhoneCreateManyContactInputEnvelope.schema'
import { ContactPhoneWhereUniqueInputObjectSchema } from './ContactPhoneWhereUniqueInput.schema'

export const ContactPhoneCreateNestedManyWithoutContactInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactPhoneCreateWithoutContactInputObjectSchema,
					z.array(ContactPhoneCreateWithoutContactInputObjectSchema),
					ContactPhoneUncheckedCreateWithoutContactInputObjectSchema,
					z.array(ContactPhoneUncheckedCreateWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ContactPhoneCreateOrConnectWithoutContactInputObjectSchema,
					z.array(ContactPhoneCreateOrConnectWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ContactPhoneCreateManyContactInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ContactPhoneWhereUniqueInputObjectSchema,
					z.array(ContactPhoneWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
