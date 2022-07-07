import { z } from 'zod'
import { InteractionsCreateWithoutContactInputObjectSchema } from './InteractionsCreateWithoutContactInput.schema'
import { InteractionsUncheckedCreateWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateWithoutContactInput.schema'
import { InteractionsCreateOrConnectWithoutContactInputObjectSchema } from './InteractionsCreateOrConnectWithoutContactInput.schema'
import { InteractionsCreateManyContactInputEnvelopeObjectSchema } from './InteractionsCreateManyContactInputEnvelope.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'

export const InteractionsUncheckedCreateNestedManyWithoutContactInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					InteractionsCreateWithoutContactInputObjectSchema,
					z.array(InteractionsCreateWithoutContactInputObjectSchema),
					InteractionsUncheckedCreateWithoutContactInputObjectSchema,
					z.array(InteractionsUncheckedCreateWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					InteractionsCreateOrConnectWithoutContactInputObjectSchema,
					z.array(InteractionsCreateOrConnectWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				InteractionsCreateManyContactInputEnvelopeObjectSchema?.optional(),
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
