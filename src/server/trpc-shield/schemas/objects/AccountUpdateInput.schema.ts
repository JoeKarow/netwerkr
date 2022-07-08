import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutAccountsInputObjectSchema } from './UserUpdateOneRequiredWithoutAccountsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { byID } from '../connect'

const ConnectUser = z.object({
	connect: byID,
})

export const AccountUpdateInputObjectSchema = z.object({
	type: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	provider: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	providerAccountId: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	refresh_token: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	access_token: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	expires_at: z
		.union([
			z.number(),
			NullableIntFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	token_type: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	scope: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	id_token: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	session_state: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	user: ConnectUser?.optional(),
})
