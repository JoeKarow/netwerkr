import { z } from 'zod'
import { SocialMediaCreateWithoutContactInputObjectSchema } from './SocialMediaCreateWithoutContactInput.schema'
import { SocialMediaUncheckedCreateWithoutContactInputObjectSchema } from './SocialMediaUncheckedCreateWithoutContactInput.schema'
import { SocialMediaCreateOrConnectWithoutContactInputObjectSchema } from './SocialMediaCreateOrConnectWithoutContactInput.schema'
import { SocialMediaCreateManyContactInputEnvelopeObjectSchema } from './SocialMediaCreateManyContactInputEnvelope.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'

export const SocialMediaUncheckedCreateNestedManyWithoutContactInputObjectSchema =
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
			createMany:
				SocialMediaCreateManyContactInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					SocialMediaWhereUniqueInputObjectSchema,
					z.array(SocialMediaWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
