import { z } from 'zod'
import { SocialMediaServiceCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceCreateOrConnectWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateOrConnectWithoutInteractionsInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'

export const SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					SocialMediaServiceCreateWithoutInteractionsInputObjectSchema,
					SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				SocialMediaServiceCreateOrConnectWithoutInteractionsInputObjectSchema?.optional(),
		}),
		z.object({
			connect: SocialMediaServiceWhereUniqueInputObjectSchema?.optional(),
		}),
	])
