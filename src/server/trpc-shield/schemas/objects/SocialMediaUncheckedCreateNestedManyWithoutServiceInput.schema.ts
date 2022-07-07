import { z } from 'zod'
import { SocialMediaCreateWithoutServiceInputObjectSchema } from './SocialMediaCreateWithoutServiceInput.schema'
import { SocialMediaUncheckedCreateWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateWithoutServiceInput.schema'
import { SocialMediaCreateOrConnectWithoutServiceInputObjectSchema } from './SocialMediaCreateOrConnectWithoutServiceInput.schema'
import { SocialMediaCreateManyServiceInputEnvelopeObjectSchema } from './SocialMediaCreateManyServiceInputEnvelope.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './SocialMediaWhereUniqueInput.schema'

export const SocialMediaUncheckedCreateNestedManyWithoutServiceInputObjectSchema =
	z.union([
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
			createMany:
				SocialMediaCreateManyServiceInputEnvelopeObjectSchema?.optional(),
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
