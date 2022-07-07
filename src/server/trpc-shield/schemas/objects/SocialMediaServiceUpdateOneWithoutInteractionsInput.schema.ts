import { z } from 'zod'
import { SocialMediaServiceCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceCreateOrConnectWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateOrConnectWithoutInteractionsInput.schema'
import { SocialMediaServiceUpsertWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUpsertWithoutInteractionsInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceUpdateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUpdateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedUpdateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedUpdateWithoutInteractionsInput.schema'

export const SocialMediaServiceUpdateOneWithoutInteractionsInputObjectSchema =
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
			upsert:
				SocialMediaServiceUpsertWithoutInteractionsInputObjectSchema?.optional(),
		}),
		z.object({
			disconnect: z.boolean()?.optional(),
		}),
		z.object({
			delete: z.boolean()?.optional(),
		}),
		z.object({
			connect: SocialMediaServiceWhereUniqueInputObjectSchema?.optional(),
		}),
		z.object({
			update: z
				.union([
					SocialMediaServiceUpdateWithoutInteractionsInputObjectSchema,
					SocialMediaServiceUncheckedUpdateWithoutInteractionsInputObjectSchema,
				])
				?.optional(),
		}),
	])
