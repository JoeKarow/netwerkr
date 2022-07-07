import { z } from 'zod'
import { ContactPhoneCreateWithoutContactInputObjectSchema } from './ContactPhoneCreateWithoutContactInput.schema'
import { ContactPhoneUncheckedCreateWithoutContactInputObjectSchema } from './ContactPhoneUncheckedCreateWithoutContactInput.schema'
import { ContactPhoneCreateOrConnectWithoutContactInputObjectSchema } from './ContactPhoneCreateOrConnectWithoutContactInput.schema'
import { ContactPhoneUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './ContactPhoneUpsertWithWhereUniqueWithoutContactInput.schema'
import { ContactPhoneCreateManyContactInputEnvelopeObjectSchema } from './ContactPhoneCreateManyContactInputEnvelope.schema'
import { ContactPhoneWhereUniqueInputObjectSchema } from './ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './ContactPhoneUpdateWithWhereUniqueWithoutContactInput.schema'
import { ContactPhoneUpdateManyWithWhereWithoutContactInputObjectSchema } from './ContactPhoneUpdateManyWithWhereWithoutContactInput.schema'
import { ContactPhoneScalarWhereInputObjectSchema } from './ContactPhoneScalarWhereInput.schema'

export const ContactPhoneUpdateManyWithoutContactInputObjectSchema = z.union([
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
		upsert: z
			.union([
				ContactPhoneUpsertWithWhereUniqueWithoutContactInputObjectSchema,
				z.array(
					ContactPhoneUpsertWithWhereUniqueWithoutContactInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		createMany:
			ContactPhoneCreateManyContactInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		set: z
			.union([
				ContactPhoneWhereUniqueInputObjectSchema,
				z.array(ContactPhoneWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		disconnect: z
			.union([
				ContactPhoneWhereUniqueInputObjectSchema,
				z.array(ContactPhoneWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		delete: z
			.union([
				ContactPhoneWhereUniqueInputObjectSchema,
				z.array(ContactPhoneWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connect: z
			.union([
				ContactPhoneWhereUniqueInputObjectSchema,
				z.array(ContactPhoneWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		update: z
			.union([
				ContactPhoneUpdateWithWhereUniqueWithoutContactInputObjectSchema,
				z.array(
					ContactPhoneUpdateWithWhereUniqueWithoutContactInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		updateMany: z
			.union([
				ContactPhoneUpdateManyWithWhereWithoutContactInputObjectSchema,
				z.array(ContactPhoneUpdateManyWithWhereWithoutContactInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		deleteMany: z
			.union([
				ContactPhoneScalarWhereInputObjectSchema,
				z.array(ContactPhoneScalarWhereInputObjectSchema),
			])
			?.optional(),
	}),
])
