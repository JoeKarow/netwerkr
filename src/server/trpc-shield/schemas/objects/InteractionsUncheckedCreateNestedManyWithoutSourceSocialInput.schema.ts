import { z } from 'zod'
import { InteractionsCreateWithoutSourceSocialInputObjectSchema } from './InteractionsCreateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateWithoutSourceSocialInput.schema'
import { InteractionsCreateOrConnectWithoutSourceSocialInputObjectSchema } from './InteractionsCreateOrConnectWithoutSourceSocialInput.schema'
import { InteractionsCreateManySourceSocialInputEnvelopeObjectSchema } from './InteractionsCreateManySourceSocialInputEnvelope.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'

export const InteractionsUncheckedCreateNestedManyWithoutSourceSocialInputObjectSchema =
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
			createMany:
				InteractionsCreateManySourceSocialInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					InteractionsWhereUniqueInputObjectSchema,
					z.array(InteractionsWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
