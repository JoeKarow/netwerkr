import { z } from 'zod'
import { SocialMediaCreateWithoutServiceInputObjectSchema } from './SocialMediaCreateWithoutServiceInput.schema'
import { SocialMediaUncheckedCreateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateWithoutServiceInput.schema'
import { SocialMediaCreateOrConnectWithoutServiceInputObjectSchema } from './SocialMediaCreateOrConnectWithoutServiceInput.schema'
import { SocialMediaUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './SocialMediaUpsertWithWhereUniqueWithoutServiceInput.schema'
import { SocialMediaCreateManyServiceInputEnvelopeObjectSchema } from './SocialMediaCreateManyServiceInputEnvelope.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './SocialMediaUpdateWithWhereUniqueWithoutServiceInput.schema'
import { SocialMediaUpdateManyWithWhereWithoutServiceInputObjectSchema } from './SocialMediaUpdateManyWithWhereWithoutServiceInput.schema'
import { SocialMediaScalarWhereInputObjectSchema } from './SocialMediaScalarWhereInput.schema'

export const SocialMediaUpdateManyWithoutServiceInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				SocialMediaCreateWithoutServiceInputObjectSchema,
				z.array(SocialMediaCreateWithoutServiceInputObjectSchema),
				SocialMediaUncheckedCreateWithoutServiceInputObjectSchema,
				z.array(SocialMediaUncheckedCreateWithoutServiceInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate: z
			.union([
				SocialMediaCreateOrConnectWithoutServiceInputObjectSchema,
				z.array(SocialMediaCreateOrConnectWithoutServiceInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		upsert: z
			.union([
				SocialMediaUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
				z.array(
					SocialMediaUpsertWithWhereUniqueWithoutServiceInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		createMany:
			SocialMediaCreateManyServiceInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		set: z
			.union([
				SocialMediaWhereUniqueInputObjectSchema,
				z.array(SocialMediaWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		disconnect: z
			.union([
				SocialMediaWhereUniqueInputObjectSchema,
				z.array(SocialMediaWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		delete: z
			.union([
				SocialMediaWhereUniqueInputObjectSchema,
				z.array(SocialMediaWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connect: z
			.union([
				SocialMediaWhereUniqueInputObjectSchema,
				z.array(SocialMediaWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		update: z
			.union([
				SocialMediaUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
				z.array(
					SocialMediaUpdateWithWhereUniqueWithoutServiceInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		updateMany: z
			.union([
				SocialMediaUpdateManyWithWhereWithoutServiceInputObjectSchema,
				z.array(SocialMediaUpdateManyWithWhereWithoutServiceInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		deleteMany: z
			.union([
				SocialMediaScalarWhereInputObjectSchema,
				z.array(SocialMediaScalarWhereInputObjectSchema),
			])
			?.optional(),
	}),
])
