import { z } from 'zod'
import { SocialMediaCreateWithoutContactInputObjectSchema } from './SocialMediaCreateWithoutContactInput.schema'
import { SocialMediaUncheckedCreateWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateWithoutContactInput.schema'
import { SocialMediaCreateOrConnectWithoutContactInputObjectSchema } from './SocialMediaCreateOrConnectWithoutContactInput.schema'
import { SocialMediaUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './SocialMediaUpsertWithWhereUniqueWithoutContactInput.schema'
import { SocialMediaCreateManyContactInputEnvelopeObjectSchema } from './SocialMediaCreateManyContactInputEnvelope.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'
import { SocialMediaUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './SocialMediaUpdateWithWhereUniqueWithoutContactInput.schema'
import { SocialMediaUpdateManyWithWhereWithoutContactInputObjectSchema } from './SocialMediaUpdateManyWithWhereWithoutContactInput.schema'
import { SocialMediaScalarWhereInputObjectSchema } from './SocialMediaScalarWhereInput.schema'

export const SocialMediaUncheckedUpdateManyWithoutContactInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					SocialMediaCreateWithoutContactInputObjectSchema,
					z.array(SocialMediaCreateWithoutContactInputObjectSchema),
					SocialMediaUncheckedCreateWithoutContactInputObjectSchema,
					z.array(SocialMediaUncheckedCreateWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					SocialMediaCreateOrConnectWithoutContactInputObjectSchema,
					z.array(SocialMediaCreateOrConnectWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			upsert: z
				.union([
					SocialMediaUpsertWithWhereUniqueWithoutContactInputObjectSchema,
					z.array(
						SocialMediaUpsertWithWhereUniqueWithoutContactInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				SocialMediaCreateManyContactInputEnvelopeObjectSchema?.optional(),
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
					SocialMediaUpdateWithWhereUniqueWithoutContactInputObjectSchema,
					z.array(
						SocialMediaUpdateWithWhereUniqueWithoutContactInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			updateMany: z
				.union([
					SocialMediaUpdateManyWithWhereWithoutContactInputObjectSchema,
					z.array(
						SocialMediaUpdateManyWithWhereWithoutContactInputObjectSchema
					),
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
