import { z } from 'zod'
import { InteractionsCreateWithoutSourceSocialInputObjectSchema } from './InteractionsCreateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateWithoutSourceSocialInput.schema'
import { InteractionsCreateOrConnectWithoutSourceSocialInputObjectSchema } from './InteractionsCreateOrConnectWithoutSourceSocialInput.schema'
import { InteractionsUpsertWithWhereUniqueWithoutSourceSocialInputObjectSchema } from './InteractionsUpsertWithWhereUniqueWithoutSourceSocialInput.schema'
import { InteractionsCreateManySourceSocialInputEnvelopeObjectSchema } from './InteractionsCreateManySourceSocialInputEnvelope.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithWhereUniqueWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateWithWhereUniqueWithoutSourceSocialInput.schema'
import { InteractionsUpdateManyWithWhereWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateManyWithWhereWithoutSourceSocialInput.schema'
import { InteractionsScalarWhereInputObjectSchema } from './InteractionsScalarWhereInput.schema'

export const InteractionsUpdateManyWithoutSourceSocialInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					InteractionsCreateWithoutSourceSocialInputObjectSchema,
					z.array(InteractionsCreateWithoutSourceSocialInputObjectSchema),
					InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema,
					z.array(
						InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					InteractionsCreateOrConnectWithoutSourceSocialInputObjectSchema,
					z.array(
						InteractionsCreateOrConnectWithoutSourceSocialInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			upsert: z
				.union([
					InteractionsUpsertWithWhereUniqueWithoutSourceSocialInputObjectSchema,
					z.array(
						InteractionsUpsertWithWhereUniqueWithoutSourceSocialInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				InteractionsCreateManySourceSocialInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			set: z
				.union([
					InteractionsWhereUniqueInputObjectSchema,
					z.array(InteractionsWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			disconnect: z
				.union([
					InteractionsWhereUniqueInputObjectSchema,
					z.array(InteractionsWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			delete: z
				.union([
					InteractionsWhereUniqueInputObjectSchema,
					z.array(InteractionsWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connect: z
				.union([
					InteractionsWhereUniqueInputObjectSchema,
					z.array(InteractionsWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			update: z
				.union([
					InteractionsUpdateWithWhereUniqueWithoutSourceSocialInputObjectSchema,
					z.array(
						InteractionsUpdateWithWhereUniqueWithoutSourceSocialInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			updateMany: z
				.union([
					InteractionsUpdateManyWithWhereWithoutSourceSocialInputObjectSchema,
					z.array(
						InteractionsUpdateManyWithWhereWithoutSourceSocialInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			deleteMany: z
				.union([
					InteractionsScalarWhereInputObjectSchema,
					z.array(InteractionsScalarWhereInputObjectSchema),
				])
				?.optional(),
		}),
	])
